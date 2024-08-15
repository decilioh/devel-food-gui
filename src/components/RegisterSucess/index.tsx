import { Button } from '../common/Button'
import { LogoDevelFood } from '../common/Logo'
import { ActionContainer, CheckContainer, Container } from './styles'
import SucessIcon from '../../assets/images/RegisterSucessIcon.svg'

interface RegisterSucessProps {
    onSubmit: () => void;
}

export const RegisterSucess = ({ onSubmit }: RegisterSucessProps) => {

    return (
        <Container>

            <LogoDevelFood />

            <CheckContainer>
                <figure>
                    <img src={SucessIcon} alt="" />
                </figure>
                <p>Cadastro Finalizado!</p>
            </CheckContainer>

            <ActionContainer>
                <span>
                    Parabéns! Agora você pode aproveitar nossas ofertas
                    e <br />serviços e economizar com super cupons DevelFood!
                </span>
                <Button onClick={onSubmit}>Continuar</Button>
            </ActionContainer>
        </Container>
    )
}
