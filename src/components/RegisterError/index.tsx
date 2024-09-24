import { Button } from '../common/Button'
import { LogoDevelFood } from '../common/Logo'
import { ActionContainer, CheckContainer, Container, LogoContainer } from './styles'
import ErrorIcon from '../../assets/images/RegisterErrorIcon.svg'

interface RegisterErrorProps {
    refreshRegister: () => void;
}

export const RegisterError = ({ refreshRegister }: RegisterErrorProps) => {
    return (
        <Container>
            <LogoContainer>
                <LogoDevelFood />
            </LogoContainer>

            <CheckContainer>
                <figure>
                    <img src={ErrorIcon} alt="Ocorreu um erro!" id='error-image' />
                </figure>
                <div>

                    <p>Algo deu errado!</p>
                    <span id='message-response'>
                        Um erro ocorreu, contate o administrador do site ou tente novamente!
                    </span>
                </div>
            </CheckContainer>

            <ActionContainer>
                <Button
                    id='continue-button'
                    type='button'
                    onClick={refreshRegister}>
                    Continuar
                </Button>
            </ActionContainer>
        </Container>
    )
}
