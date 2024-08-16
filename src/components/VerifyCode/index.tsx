import check from '../../assets/images/CheckForgotPassword.svg'
import { Button } from '../common/Button'
import { ActionContainer, CheckContainer, Container } from './styles'

interface VerifyCodeProps {
    onSubmit: () => void;
}

export const VerifyCode = ({ onSubmit }: VerifyCodeProps) => {

    return (
        <Container>

            <CheckContainer>
                <figure>
                    <img src={check} alt="" id="image-sucess" />
                </figure>
                <p>Código de validação</p>
            </CheckContainer>

            <div>
                <p id="paragraph-message">
                    Copie ou anote este código,
                    ele será utilizado para você
                    finalizar a recuperação de senha!
                </p>
            </div>

            <ActionContainer>
                <span id="code-request-password">
                    AUIhuiaasa56d4as56-AUIhuiaasa56d4as56
                    56das465fa4d56-5fsd4fgsd65f4sa
                </span>
                <Button id="button-submit-verify-code" onClick={onSubmit}>Continuar</Button>
            </ActionContainer>
        </Container>
    )
}
