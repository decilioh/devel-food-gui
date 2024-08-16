import { Button } from '../common/Button'
import { LogoDevelFood } from '../common/Logo'
import { ActionContainer, CheckContainer, Container } from './styles'
import ErrorIcon from '../../assets/images/RegisterErrorIcon.svg'


export const RegisterError = () => {

    return (
        <Container>

            <LogoDevelFood />

            <CheckContainer>
                <figure>
                    <img src={ErrorIcon} alt="Ocorreu um erro!" />
                </figure>
                <p>Algo deu errado!</p>
            </CheckContainer>

            <ActionContainer>
                <span>
                    Um erro ocorreu, contate o administrador do site ou tente novamente!
                </span>
                <Button>Continuar</Button>
            </ActionContainer>
        </Container>
    )
}
