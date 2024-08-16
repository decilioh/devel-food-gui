import { zodResolver } from "@hookform/resolvers/zod";
import foodImage from '../../assets/images/backlogin.png'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Input } from '../../components/common/Input'
import { Box, FigureIMG, Form, FormContainer, Main } from './styles'
import { useForm } from 'react-hook-form'
import { LoginData, schema } from './schema'
import { MdOutlineEmail } from "react-icons/md";
import { CiUnlock } from "react-icons/ci";
import { useTheme } from '../../hooks/useTheme';
import { LogoDevelFood } from "../../components/common/Logo";


export const Login = () => {
    const { theme } = useTheme();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const onSubmitLogin = (data: LoginData) => {
        console.log(data);

        if (data) {
            reset()
        }
    };

    return (
        <Main $image={foodImage}>

            <FigureIMG $image={foodImage} id="imagem-login" />

            <FormContainer id="form-container">
                <Box>
                    <LogoDevelFood />
                    <Form id="form-login" onSubmit={handleSubmit(onSubmitLogin)}>
                        <fieldset>
                            <Input
                                type="email"
                                name='email'
                                placeholder='E-mail'
                                register={register}
                                error={errors.email?.message}
                                icon={<MdOutlineEmail />}
                                id="input-email-login"
                            />

                            <Input
                                name="password"
                                type="password"
                                placeholder='Senha'
                                register={register}
                                error={errors.password?.message}
                                icon={<CiUnlock />}
                                id="input-password-login"
                            />
                        </fieldset>
                        <Button id='button-login-submit' type='submit'>Logar</Button>
                    </Form>

                    <Link id="link-pagina-esqueci-minha-senha" to="esqueci-minha-senha">Esqueci minha senha</Link>
                    <Link id="link-pagina-cadastro" to="cadastrar">criar conta</Link>
                </Box>
            </FormContainer>

        </Main>
    )
}
