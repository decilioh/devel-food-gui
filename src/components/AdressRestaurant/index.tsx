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


interface RestaurantAdressProps {
    onSubmit: (data: RestaurantAdreesDataProps) => void;
}

export const RestaurantAdress = ({ onSubmit }: RestaurantAdressProps) => {

    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<RestaurantAdressData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleCEPChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const maskedValue = maskCEP(event.target.value);
        setValue('cep', maskedValue);
        await trigger('cep')
    };

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
                        />
                    </SpaceDiv>
                    <Input
                        name="cep"
                        type="text"
                        placeholder='CEP'
                        register={register}
                        error={errors.cep?.message}
                        icon={<FaHouse />}
                        onChange={handleCEPChange}
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
