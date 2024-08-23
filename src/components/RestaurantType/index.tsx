import step2Light from '../../assets/images/step/light/step-2-light.svg'
import step2Dark from '../../assets/images/step/dark/step-2-dark.svg'
import { Button } from "../common/Button"
import { Input } from "../common/Input"
import { LogoDevelFood } from "../common/Logo"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { StepRegister } from "../common/StepRegister"
import { restaurantTypeData, schema } from "./schema"
import { maskPhone } from "../../utils/mask"
import { FaPhoneAlt } from "react-icons/fa";
import { RestaurantTypeDataProps } from '../../pages/RegisterRestaurant/interfaces'
import { Dropdown } from '../common/DropDown'
import { MdOutlineAccessibility } from 'react-icons/md'
import { Container, FieldButton, Form, InputsContainer, LogoView } from "./styles"
interface RestaurantTypeProps {
    onSubmit: (data: RestaurantTypeDataProps) => void;
}

export const RestaurantType = ({ onSubmit }: RestaurantTypeProps) => {

    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<restaurantTypeData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handlePhoneChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const maskedValue = maskPhone(event.target.value);
        setValue('telefone', maskedValue);
        await trigger('telefone')
    };

    const handleNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof restaurantTypeData, value);
        await trigger('name');
    };

    const handleDropdownChange = (value: string[]) => {
        setValue('restaurantType', value);
        trigger('restaurantType');
    };


    const handleSubmitForm = (data: restaurantTypeData) => {

        if (data) {
            onSubmit(data);
        }
    }

    return (
        <Container>
            <LogoView>
                <LogoDevelFood />
            </LogoView>
            <Form id="form-restaurant-type" onSubmit={handleSubmit(handleSubmitForm)}>
                <figure>
                    <StepRegister
                        lightSrc={step2Light}
                        darkSrc={step2Dark}
                        alt="Etapa 1"
                    />
                </figure>
                <InputsContainer>
                    <fieldset>
                        <Input
                            name="name"
                            type="text"
                            placeholder='Nome'
                            register={register}
                            error={errors.name?.message}
                            icon={<MdOutlineAccessibility />}
                            onChange={handleNameChange}
                            id="input-name"
                        />
                    </fieldset>
                    <fieldset>
                        <Input
                            name="telefone"
                            type="tel"
                            placeholder='Telefone'
                            register={register}
                            error={errors.telefone?.message}
                            icon={<FaPhoneAlt />}
                            onChange={handlePhoneChange}
                            id="input-telephone"
                        />
                    </fieldset>
                    <fieldset>
                        <Dropdown
                            name="restaurantType"
                            register={register}
                            error={errors.restaurantType?.message}
                            options={[
                                { value: 'Brasileira', label: 'Brasileira' },
                                { value: 'Picante', label: 'Picante' },
                                { value: 'Mexicana', label: 'Mexicana' },
                                { value: 'Japonesa', label: 'Japonesa' },
                                { value: 'Tailandesa', label: 'Tailandesa' },
                                { value: 'Chinesa', label: 'Chinesa' },
                                { value: 'Indiana', label: 'Indiana' },
                                { value: 'Italiana', label: 'Italiana' },

                            ]}
                            onChange={handleDropdownChange}
                            value={[]}
                        />
                    </fieldset>
                </InputsContainer>

                <FieldButton>
                    <Button id="button-submit-restaurant-type" type="submit">Continuar</Button>
                </FieldButton>
            </Form>
        </Container>

    )

}