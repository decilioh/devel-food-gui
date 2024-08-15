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

    const handleSubmitForm = (data: restaurantTypeData) => {
        // if (data.restaurantType.length === 0) {
        //     return
        // }

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
                    <Select
                        name="restaurantType"
                        register={register}
                        icon={<MdFastfood />}
                        error={errors.restaurantType?.message}
                    >
                        <option value="">Tipos de comida</option>
                        <option value="Brasileira">Brasileira</option>
                        <option value="Vegatariano / vegano">Vegetariano / vegano</option>
                        <option value="Mexicana">Mexicana</option>
                        <option value="Japonesa">Japonesa</option>
                    </Select>
                </fieldset>
            </InputsContainer>

            <FieldButton>
                <Button type="submit">Concluir</Button>
            </FieldButton>
        </Form>
    )

}
