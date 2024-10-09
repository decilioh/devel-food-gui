import { FaHouse } from "react-icons/fa6";
import { Input } from "../../../../components/common/Input";
import { RestaurantAdressData, schema } from "./schema";
import { maskCEP } from "../../../../utils/mask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { fetchAddressByCep } from "../../../../services/fetchCEP";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { getAddressData } from "../../../../services/getAddressById";
import { updateAddressData } from "../../../../services/updatedAddressData";
import {
    FieldsetFlex,
    Form,
    InputsContainer,
    SpaceDiv,
    SpaceDivName,
    SpaceNumberAdress,
} from "./styles";

export const DataAdress = ({ onSubmitRef }: { onSubmitRef: React.MutableRefObject<(() => Promise<void>) | null> }) => {
    const { user } = useContext(AuthContext)
    const [shouldFetch, setShouldFetch] = useState(true);

    const {
        register,
        setValue,
        trigger,
        formState: { errors },
        handleSubmit,
    } = useForm<RestaurantAdressData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const handleInputChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        setValue(name as keyof RestaurantAdressData, value);
        await trigger(name as keyof RestaurantAdressData);
    };

    const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const maskedValue = maskCEP(rawValue);
        setValue("cep", maskedValue);

        if (maskedValue.length === 9) {
            const cepWithoutDash = maskedValue.replace("-", "");
            const addressData = await fetchAddressByCep(cepWithoutDash);
            if (addressData) {
                setValue("road", addressData.logradouro);
                setValue("neighborhood", addressData.bairro);
                setValue("city", addressData.localidade);
                setValue("state", addressData.uf);
                console.log(addressData);
            }
            await trigger("cep");
        }
    };

    useEffect(() => {
        const fetchAddressUser = async () => {
            try {
                const restaurantId = user?.id
                const response = await getAddressData(restaurantId)
                const rawValue = response.postalCode;
                const maskedValue = maskCEP(rawValue);
                setValue('cep', maskedValue)
                setValue('city', response.city)
                setValue('nameAdress', response.addressLabel)
                setValue('neighborhood', response.neighborhood)
                setValue('numberRestaurant', response.number)
                setValue('road', response.street)
                setValue('state', response.state)

            } catch (error) {
                throw new Error('Falha ao buscar os dados');
            }
        };

        if (shouldFetch) {
            fetchAddressUser();
            setShouldFetch(false);
        }

        fetchAddressUser();
    }, [shouldFetch]);

    const onSubmit = async (data: RestaurantAdressData) => {
        updateAddressData({
            ...data,
            id: user?.id,
            addressLabel: data.nameAdress,
            postalCode: data.cep.replace(/\D/g, ''),
            street: data.road,
            number: data.numberRestaurant
        });
        setShouldFetch(true)
    };

    useEffect(() => {
        onSubmitRef.current = handleSubmit(onSubmit);
    }, [onSubmitRef, handleSubmit]);

    return (
        <Form id="form-adress-restaurant" onSubmit={handleSubmit(onSubmit)}>
            <InputsContainer>
                <FieldsetFlex>
                    <SpaceDivName>
                        <Input
                            name="nameAdress"
                            type="text"
                            placeholder="Apelido do endereço"
                            register={register}
                            error={errors.nameAdress?.message}
                            icon={<FaHouse />}
                            onChange={handleInputChange}
                            id="input-name-adress"
                        />
                    </SpaceDivName>
                    <Input
                        name="cep"
                        type="text"
                        placeholder="CEP"
                        register={register}
                        error={errors.cep?.message}
                        icon={<FaHouse />}
                        id="input-cep"
                        onChange={handleCepChange}
                    />
                </FieldsetFlex>
                <fieldset>
                    <Input
                        name="road"
                        type="text"
                        placeholder="Rua"
                        register={register}
                        error={errors.road?.message}
                        icon={<FaHouse />}
                        onChange={handleInputChange}
                        id="input-road"
                    />
                </fieldset>

                <fieldset>
                    <Input
                        name="city"
                        type="text"
                        placeholder="Cidade"
                        register={register}
                        error={errors.city?.message}
                        icon={<FaHouse />}
                        onChange={handleInputChange}
                        id="input-city"
                    />
                </fieldset>

                <fieldset>
                    <Input
                        name="neighborhood"
                        type="text"
                        placeholder="Bairro"
                        register={register}
                        error={errors.neighborhood?.message}
                        icon={<FaHouse />}
                        onChange={handleInputChange}
                        id="input-neighborhood"
                    />
                </fieldset>

                <FieldsetFlex>
                    <SpaceDiv>
                        <Input
                            name="state"
                            type="text"
                            placeholder="Estado"
                            register={register}
                            error={errors.state?.message}
                            icon={<FaHouse />}
                            onChange={handleInputChange}
                            id="input-state"
                        />
                    </SpaceDiv>
                    <SpaceNumberAdress>
                        <Input
                            name="numberRestaurant"
                            type="text"
                            placeholder="Número"
                            register={register}
                            error={errors.numberRestaurant?.message}
                            icon={<FaHouse />}
                            onChange={handleInputChange}
                            id="input-number-restaurant"
                        />
                    </SpaceNumberAdress>
                </FieldsetFlex>
            </InputsContainer>
        </Form>
    );
};
