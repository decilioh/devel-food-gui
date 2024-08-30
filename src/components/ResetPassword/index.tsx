import { Input } from "../common/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { passwordData, schema } from "./schema"
import { Button } from "../common/Button"
import { LogoDevelFood } from "../common/Logo"
import { FieldButton, Form, InputsContainer } from "./styles"
import { MdLockOpen } from "react-icons/md"


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
        <Form id='form-reset-password' onSubmit={handleSubmit(handleSubmitForm)}>
            <LogoDevelFood />
            <InputsContainer>
                <fieldset>
                    <Input
                        name="code"
                        type="text"
                        placeholder='Código de validação'
                        register={register}
                        error={errors.code?.message}
                        icon={<MdLockOpen />}
                        id="input-code-register"
                    />
                </fieldset>
                <fieldset>
                    <Input
                        name="password"
                        type="password"
                        placeholder='Nova senha'
                        register={register}
                        error={errors.password?.message}
                        icon={<MdLockOpen />}
                        onChange={handlePasswordChange}
                        id="input-password"
                    />
                </fieldset>

                <fieldset>
                    <Input
                        name="confirmPassword"
                        type="password"
                        placeholder='Confirmar senha'
                        register={register}
                        error={errors.confirmPassword?.message}
                        icon={<MdLockOpen />}
                        id="input-confirm-password"
                        onChange={handlePasswordChange}
                    />
                </fieldset>
            </InputsContainer>

            <FieldButton>
                <Button id="button-submit-reset-password" type="submit">Concluir</Button>
                <Button id="return-page" onClick={navigate}>Voltar</Button>
            </FieldButton>
        </Form>
    )
}
