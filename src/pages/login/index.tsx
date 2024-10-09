import { zodResolver } from "@hookform/resolvers/zod";
import foodImage from '../../assets/images/backlogin.png'
import { Link } from 'react-router-dom'
import { Box, FigureIMG, Form, FormContainer, LinkContainer, Main } from './styles'
import { useForm } from 'react-hook-form'
import { LoginData, schema } from './schema'
import { MdLockOpen, MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { LogoDevelFood } from "../../components/common/Logo";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";


export const Login = () => {

    const { SignIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handleSubmitSign = async (data: LoginData) => {
        try {
            await SignIn(data)
            window.location.replace('/admin/home');

        } catch (error) {
            toast.error("ocorreu um erro, tente novamente")
            return
        }
    };

    return (
        <Main $image={foodImage}>
            <Helmet title="Login" />
            <FigureIMG $image={foodImage} id="image-login" />

            <FormContainer id="form-container">
                <Box>
                    <LogoDevelFood />
                    <Form id="form-login" onSubmit={handleSubmit(handleSubmitSign)}>
                        <fieldset>
                            <Input
                                type="email"
                                name='email'
                                placeholder='E-mail'
                                register={register}
                                error={errors.email?.message}
                                icon={<MdOutlineEmail tabIndex={-1} />}
                                id="input-email-login"
                            />

                            <Input
                                name="password"
                                type="password"
                                placeholder='Senha'
                                register={register}
                                error={errors.password?.message}
                                icon={<MdLockOpen tabIndex={-1} />}
                                id="input-password-login"
                            />
                        </fieldset>
                        <Button id='button-login-submit' type='submit'>Logar</Button>
                    </Form>
                    <LinkContainer>
                        <Link id="link-page-forgot-my-password" to="esqueci-minha-senha">Esqueci minha senha</Link>
                        <Link id="link-page-register" to="cadastrar">Criar conta</Link>
                    </LinkContainer>
                </Box>
            </FormContainer>

        </Main>
    )
}
