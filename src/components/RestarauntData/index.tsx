import { CiUnlock } from "react-icons/ci"
import { Button } from "../common/Button"
import { Input } from "../common/Input"
import { LogoDevelFood } from "../common/Logo"
import { FieldButton, Form, InputsContainer } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { restaurantData, schema } from "./schema"
import { StepRegister } from "../common/StepRegister"
import step1Light from '../../assets/images/step/light/step-1-light.svg'
import step1Dark from '../../assets/images/step/dark/step-1-dark.svg'
import { maskCNPJ } from "../../utils/mask"
import { restaurantDataRegister } from "../../pages/RegisterRestaurant/interfaces"
import { MdOutlineEmail } from "react-icons/md"
import { IoMdCard } from "react-icons/io";



interface RestaurantDataProps {
    onSubmit: (data: restaurantDataRegister) => void;
}

export const RestaurantData = ({ onSubmit }: RestaurantDataProps) => {

    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<restaurantData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handlePasswordChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValue(name as keyof restaurantData, value);
        await trigger(name as keyof restaurantData);
    };

    const handleCNPJChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const maskedValue = maskCNPJ(event.target.value);
        setValue('cnpj', maskedValue);
        await trigger('cnpj');
    };

    const handleEmailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue(name as keyof restaurantData, value);
        await trigger('email');
    };

    const handleSubmitForm = (dataRestaurant: restaurantData) => {

        if (dataRestaurant.password !== dataRestaurant.confirmPassword) {
            setValue('confirmPassword', '', { shouldValidate: true });
            return;
        }

        const { confirmPassword, ...dataToSubmit } = dataRestaurant;

        onSubmit(dataToSubmit as restaurantDataRegister);

    };

    return (
        <Form id="form-restaurant-data" onSubmit={handleSubmit(handleSubmitForm)}>
            <LogoDevelFood />
            <figure>
                <StepRegister
                    lightSrc={step1Light}
                    darkSrc={step1Dark}
                    alt="Etapa 1"
                />
            </figure>
            <InputsContainer>
                <fieldset>
                    <Input
                        name="email"
                        type="email"
                        placeholder='Email'
                        register={register}
                        error={errors.email?.message}
                        icon={<MdOutlineEmail />}
                        onChange={handleEmailChange}
                        id="input-email"
                    />
                </fieldset>
                <fieldset>
                    <Input
                        name="cnpj"
                        type="text"
                        placeholder='Cnpj'
                        register={register}
                        error={errors.cnpj?.message}
                        icon={<IoMdCard />}
                        onChange={handleCNPJChange}
                        id="input-cnpj"
                    />
                </fieldset>
                <fieldset>
                    <Input
                        name="password"
                        type="password"
                        placeholder='Senha'
                        register={register}
                        error={errors.password?.message}
                        icon={<CiUnlock />}
                        onChange={handlePasswordChange}
                        id="input-password"
                    />
                </fieldset>

                <fieldset>
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder='Confirme Senha'
                        register={register}
                        error={errors.confirmPassword?.message}
                        icon={<IoMdCard />}
                        id="input-confirm-password"
                    />
                </fieldset>
            </InputsContainer>

            <FieldButton>
                <Button id="input-submit-restaurant-data" type="submit">Concluir</Button>
            </FieldButton>
        </Form>
    )

}
