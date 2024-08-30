import { Button } from '../common/Button'
import { LogoDevelFood } from '../common/Logo'
import { ActionContainer, CheckContainer, Container, LogoContainer } from './styles'
import SucessIcon from '../../assets/images/RegisterSucessIcon.svg'

interface RegisterSucessProps {
    onSubmit: () => void;
}

export const RegisterSucess = ({ onSubmit }: RegisterSucessProps) => {

    return (
        <Container>
            <LogoContainer>
                <LogoDevelFood />
            </LogoContainer>

            <CheckContainer>
                <figure>
                    <img src={SucessIcon} alt="" id='sucess-image' />
                </figure>
                <p>Cadastro finalizado!</p>
                <span id='response-message'>
                    Parabéns! Agora você pode aproveitar nossas ofertas
                    e serviços e <br />economizar com super cupons Develfood.
                </span>
            </CheckContainer>

            <ActionContainer>
                <Button id='continue-button' onClick={onSubmit}>Continuar</Button>
            </ActionContainer>
        </Container>
    )
}
