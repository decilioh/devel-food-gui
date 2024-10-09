import check from '../../assets/images/CheckForgotPassword.svg'
import { Button } from '../common/Button'
import { ActionContainer, CheckContainer, Container, Message } from './styles'

interface VerifyCodeProps {
    onSubmit: () => void;
    navigate: () => void;
}

export const VerifyCode = ({ onSubmit, navigate }: VerifyCodeProps) => {

    return (
        <Container>

            <CheckContainer>
                <figure>
                    <img src={check} alt="" id="image-sucess" />
                </figure>
                <p>Código de validação</p>
            </CheckContainer>

            <div>
                <Message id="paragraph-message">
                    Foi enviado um código para você no seu email, anote e use
                    <br />na próxima tela!
                </Message>
            </div>

            <ActionContainer>
                <div>
                    <Button id="button-return-" onClick={navigate}>Voltar</Button>
                    <Button id="button-submit-verify-code" onClick={onSubmit}>Continuar</Button>
                </div>
            </ActionContainer>
        </Container>
    )
}
