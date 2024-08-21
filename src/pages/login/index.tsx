import { zodResolver } from "@hookform/resolvers/zod";
import foodImage from '../../assets/images/backlogin.png'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Input } from '../../components/common/Input'
import { Box, FigureIMG, Form, FormContainer, LinkContainer, Main } from './styles'
import { useForm } from 'react-hook-form'
import { LoginData, schema } from './schema'
import { MdOutlineEmail } from "react-icons/md";
import { LogoDevelFood } from "../../components/common/Logo";
import { TfiUnlock } from "react-icons/tfi";


export const Login = () => {
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

            <FigureIMG $image={foodImage} id="image-login" />

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
                                icon={<TfiUnlock />}
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
