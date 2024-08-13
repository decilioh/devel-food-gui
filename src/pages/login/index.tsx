import logoLight from '../../assets/images/logoLight.svg'
import logoDark from '../../assets/images/logoDark.svg'
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



export const Login = () => {

    const { register, handleSubmit, setValue, trigger, reset, formState: { errors } } = useForm<LoginData>({
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

            <FigureIMG $image={foodImage} />

            <FormContainer>
                <Box>
                    <figure>
                        <img src={logoLight} alt="logo DevelFood" />
                    </figure>
                    <Form onSubmit={handleSubmit(onSubmitLogin)}>
                        <fieldset>
                            <Input
                                type="email"
                                name='email'
                                placeholder='E-mail'
                                register={register}
                                error={errors.email?.message}
                                icon={<MdOutlineEmail />}
                            />

                            <Input
                                name="password"
                                type="password"
                                placeholder='Senha'
                                register={register}
                                error={errors.password?.message}
                                icon={<CiUnlock />}
                            />
                        </fieldset>
                        <Button>Logar</Button>
                    </Form>

                    <Link to="esqueci-minha-senha">Esqueci minha senha</Link>
                    <Link to="registrar">criar conta</Link>
                </Box>
            </FormContainer>

        </Main>
    )
}
