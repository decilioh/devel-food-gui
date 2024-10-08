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
import { maskCEP } from '../../utils/mask';
import { fetchAddressByCep } from '../../services/fetchCEP';
import { RestaurantAdreesDataProps } from '../../context/RegisterRestaurant/interfaces';
import {
    ContainerRestaurant,
    FieldButton,
    FieldsetFlex,
    Form,
    InputsContainer,
    LogoContainer,
    SpaceDiv,
    SpaceDivName,
    SpaceNumberAdress
} from "./styles"


interface RestaurantAdressProps {
    onSubmit: (data: RestaurantAdreesDataProps) => void;
    navigate: () => void;
}

export const RestaurantAdress = ({ onSubmit, navigate }: RestaurantAdressProps) => {

    const { register, handleSubmit, setValue, trigger, formState: { errors, isSubmitting } } = useForm<RestaurantAdressData>({
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

    const handleSubmitForm = (data: RestaurantAdressData) => {
        if (data) {
            onSubmit(data);
        }
    };

    return (
        <ContainerRestaurant>
            <LogoContainer>
                <LogoDevelFood />
            </LogoContainer>
            <Form id="form-adress-restaurant" onSubmit={handleSubmit(handleSubmitForm)}>
                <figure>
                    <StepRegister
                        lightSrc={step3Light}
                        darkSrc={step3Dark}
                        alt="Etapa 1"
                    />
                </figure>
                <InputsContainer>
                    <FieldsetFlex>
                        <SpaceDivName>
                            <Input
                                name="nameAdress"
                                type="text"
                                placeholder='Apelido do endereço'
                                register={register}
                                error={errors.nameAdress?.message}
                                icon={<FaHouse />}
                                onChange={handleNameChange}
                                id="input-name-adress"
                            />
                        </SpaceDivName>
                        <Input
                            name="cep"
                            type="text"
                            placeholder='CEP'
                            register={register}
                            error={errors.cep?.message}
                            icon={<FaHouse />}
                            onChange={handleCepChange}
                            id="input-cep"
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
                            id="input-road"
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
                            id="input-city"
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
                            id="input-neighborhood"
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
                                id="input-state"
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
                                id="input-number-restaurant"
                            />
                        </SpaceNumberAdress>
                    </FieldsetFlex>
                </InputsContainer>

                <FieldButton>
                    <Button id="button-submit-adress-restaurant" disabled={isSubmitting} type="submit">
                        {isSubmitting ? 'Cadastrando...' : 'Continuar'}
                    </Button>
                    <Button id="button-return-page" onClick={navigate}>
                        Voltar
                    </Button>
                </FieldButton>
            </Form>
        </ContainerRestaurant>

    )

}
