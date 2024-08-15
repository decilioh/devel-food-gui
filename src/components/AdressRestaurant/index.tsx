import step3Light from '../../assets/images/step/light/step-3-light.svg'
import step3Dark from '../../assets/images/step/dark/step-3-dark.svg'
import { FaHouse } from "react-icons/fa6";
import { Button } from "../common/Button"
import { Input } from "../common/Input"
import { LogoDevelFood } from "../common/Logo"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { StepRegister } from "../common/StepRegister"
import { RestaurantAdressData, schema } from "./schema"
import { FieldButton, FieldsetFlex, Form, InputsContainer, SpaceDiv, SpaceNumberAdress } from "./styles"
import { maskCEP } from '../../utils/mask';
import { RestaurantAdreesDataProps } from '../../pages/RegisterRestaurant/interfaces';
import { fetchAddressByCep } from '../../services/fetchCEP';


interface RestaurantAdressProps {
    onSubmit: (data: RestaurantAdreesDataProps) => void;
}

export const RestaurantAdress = ({ onSubmit }: RestaurantAdressProps) => {

    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<RestaurantAdressData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const maskedValue = maskCEP(rawValue);
        setValue('cep', maskedValue);

        if (maskedValue.length === 9) {
            const cepWithoutDash = maskedValue.replace('-', '');
            const addressData = await fetchAddressByCep(cepWithoutDash);
            if (addressData) {
                setValue('road', addressData.logradouro);
                setValue('neighborhood', addressData.bairro);
                setValue('city', addressData.localidade);
                setValue('state', addressData.uf);
                console.log(addressData)
            }
            await trigger('cep');
        }
    };

    const handleNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof RestaurantAdressData, value);
        await trigger('nameAdress');
    };

    const handleRoadChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof RestaurantAdressData, value);
        await trigger('road');
    };

    const handleCityChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof RestaurantAdressData, value);
        await trigger('city');
    };

    const handleNeighborhoodChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof RestaurantAdressData, value);
        await trigger('neighborhood');
    };

    const handleStateChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof RestaurantAdressData, value);
        await trigger('state');
    };

    const handleNumberRestaurantChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof RestaurantAdressData, value);
        await trigger('numberRestaurant');
    }

    const handleSubmitForm = (dataAdress: RestaurantAdressData) => {
        if (dataAdress) {
            onSubmit(dataAdress)
        }
    };

    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <LogoDevelFood />
            <figure>
                <StepRegister
                    lightSrc={step3Light}
                    darkSrc={step3Dark}
                    alt="Etapa 1"
                />
            </figure>
            <InputsContainer>
                <FieldsetFlex>
                    <SpaceDiv>
                        <Input
                            name="nameAdress"
                            type="text"
                            placeholder='Apelido do endereço'
                            register={register}
                            error={errors.nameAdress?.message}
                            icon={<FaHouse />}
                            onChange={handleNameChange}
                        />
                    </SpaceDiv>
                    <Input
                        name="cep"
                        type="text"
                        placeholder='CEP'
                        register={register}
                        error={errors.cep?.message}
                        icon={<FaHouse />}
                        onChange={handleCepChange}
                    />
                </FieldsetFlex>
                <fieldset>
                    <Input
                        name="road"
                        type="text"
                        placeholder='Rua'
                        register={register}
                        error={errors.road?.message}
                        icon={<FaHouse />}
                        onChange={handleRoadChange}
                    />
                </fieldset>

                <fieldset>
                    <Input
                        name="city"
                        type="text"
                        placeholder='Cidade'
                        register={register}
                        error={errors.city?.message}
                        icon={<FaHouse />}
                        onChange={handleCityChange}
                    />
                </fieldset>

                <fieldset>
                    <Input
                        name="neighborhood"
                        type="text"
                        placeholder='Bairro'
                        register={register}
                        error={errors.neighborhood?.message}
                        icon={<FaHouse />}
                        onChange={handleNeighborhoodChange}
                    />
                </fieldset>

                <FieldsetFlex>
                    <SpaceDiv>
                        <Input
                            name="state"
                            type="text"
                            placeholder='Estado'
                            register={register}
                            error={errors.state?.message}
                            icon={<FaHouse />}
                            onChange={handleStateChange}
                        />
                    </SpaceDiv>
                    <SpaceNumberAdress>

                        <Input
                            name="numberRestaurant"
                            type="text"
                            placeholder='Número'
                            register={register}
                            error={errors.numberRestaurant?.message}
                            icon={<FaHouse />}
                            onChange={handleNumberRestaurantChange}
                        />
                    </SpaceNumberAdress>
                </FieldsetFlex>
            </InputsContainer>

            <FieldButton>
                <Button type="submit">Concluir</Button>
            </FieldButton>
        </Form>
    )

}
