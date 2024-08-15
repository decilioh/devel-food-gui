import step2Light from '../../assets/images/step/light/step-2-light.svg'
import step2Dark from '../../assets/images/step/dark/step-2-dark.svg'
import { Button } from "../common/Button"
import { Input } from "../common/Input"
import { LogoDevelFood } from "../common/Logo"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { StepRegister } from "../common/StepRegister"
import { restaurantTypeData, schema } from "./schema"
import { FieldButton, Form, InputsContainer } from "./styles"
import { maskPhone } from "../../utils/mask"
import { IoPeopleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Select } from "../common/Select"
import { MdFastfood } from "react-icons/md";
import { RestaurantTypeDataProps } from '../../pages/RegisterRestaurant/interfaces'
import { Dropdown } from '../common/DropDown'

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
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <LogoDevelFood />
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
                        type="name"
                        placeholder='Nome'
                        register={register}
                        error={errors.name?.message}
                        icon={<IoPeopleSharp />}
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
                    />
                </fieldset>
                <fieldset>
                    <Dropdown
                        name="restaurantType"
                        register={register}
                        error={errors.restaurantType?.message}
                        options={[
                            { value: 'Brasileira', label: 'Brasileira' },
                            { value: 'Vegetariano / vegano', label: 'Vegetariano / vegano' },
                            { value: 'Mexicana', label: 'Mexicana' },
                            { value: 'Japonesa', label: 'Japonesa' },
                        ]}
                        onChange={handleDropdownChange}
                        value={[]}
                    />
                </fieldset>
            </InputsContainer>

            <FieldButton>
                <Button type="submit">Concluir</Button>
            </FieldButton>
        </Form>
    )

}