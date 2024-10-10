import { Input } from "../common/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { passwordData, schema } from "./schema";
import { Button } from "../common/Button";
import { LogoDevelFood } from "../common/Logo";
import { FieldButton, Form, InputsContainer } from "./styles";
import { MdLockOpen } from "react-icons/md";
import axios from "axios";
import { apiRestaurantRegister } from "../../services/backend";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

interface ResetPasswordProps {
    email: string;
    onSubmitPassword: (password: string) => void;
    navigate?: () => void;
}

export const ResetPassword = ({ email, onSubmitPassword, navigate }: ResetPasswordProps) => {
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<passwordData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    });
    const navigatePage = useNavigate();
    const { user, SignOut } = useContext(AuthContext)

    const handlePasswordChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValue(name as keyof passwordData, value);
        await trigger(name as keyof passwordData);
    };

    const handleSubmitForm = async (data: passwordData) => {
        console.log('Formulário enviado', data);
        if (data.password !== data.confirmPassword) {
            setValue('confirmPassword', '', { shouldValidate: true });
            console.log('erro')
            return;
        }

        try {
            if (user) {
                const response = await apiRestaurantRegister.put('/password/change_password', {
                    email: email,
                    oldPassword: data.oldPassword,
                    newPassword: data.password,
                    confirmNewPassword: data.confirmPassword,
                });

                console.log(response.data);
                onSubmitPassword(data.password);
                toast.success('Senha redefinida com sucesso!');
                SignOut()
                navigatePage('/');
            } else {
                const response = await apiRestaurantRegister.put('/password/change_forget_password', {
                    email: email,
                    newPassword: data.password,
                    validationCode: data.code,
                });

                onSubmitPassword(data.password);
                toast.success('Senha redefinida com sucesso!');
                navigatePage('/');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.data || error.message);
            } else {
                console.error('Erro ao alterar a senha:', error);
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)} id='form-reset-password' >
            <LogoDevelFood />
            <InputsContainer>
                {user && (
                    <fieldset>
                        <Input
                            name="oldPassword"
                            type="password"
                            placeholder='Senha antiga'
                            register={register}
                            error={errors.oldPassword?.message}
                            icon={<MdLockOpen />}
                            onChange={handlePasswordChange}
                            id="input-old-password"
                        />
                    </fieldset>
                )}
                {!user && (
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
                )}
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
                <Button id="return-page" onClick={navigate} type="button">Voltar</Button>
            </FieldButton>
        </Form>
    );
};
