import { CiUnlock } from "react-icons/ci"
import { Input } from "../common/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { passwordData, schema } from "./schema"
import { Button } from "../common/Button"
import { LogoDevelFood } from "../common/Logo"
import { FieldButton, Form, InputsContainer } from "./styles"

interface ResetPasswordProps {
    onSubmit: (password: string) => void;
    navigate: () => void;
}

export const ResetPassword = ({ onSubmit, navigate }: ResetPasswordProps) => {

    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<passwordData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handlePasswordChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValue(name as keyof passwordData, value);
        await trigger(name as keyof passwordData);
    };

    const handleSubmitForm = (data: passwordData) => {

        if (data.password !== data.confirmPassword) {
            setValue('confirmPassword', '', { shouldValidate: true });
            return;
        }
        onSubmit(data.password)
    };

    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <LogoDevelFood />
            <InputsContainer>
                <fieldset>
                    <Input
                        name="code"
                        type="text"
                        placeholder='Código de validação'
                        register={register}
                        error={errors.code?.message}
                        icon={<CiUnlock />}
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
                    />
                </fieldset>

                <fieldset>
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder='Confirme Senha'
                        register={register}
                        error={errors.confirmPassword?.message}
                        icon={<CiUnlock />}
                    />
                </fieldset>
            </InputsContainer>

            <FieldButton>
                <Button onClick={navigate}>Voltar</Button>
                <Button type="submit">Concluir</Button>
            </FieldButton>
        </Form>
    )
}
