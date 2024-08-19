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
                    <img src={ErrorIcon} alt="Ocorreu um erro!" id='error-image' />
                </figure>
                <p>Algo deu errado!</p>
            </CheckContainer>

            <ActionContainer>
                <span id='message-response'>
                    Um erro ocorreu, contate o administrador do site ou tente novamente!
                </span>
                <Button id='continue-button'>Continuar</Button>
            </ActionContainer>
        </Container>
    )
}
