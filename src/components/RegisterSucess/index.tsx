import { Button } from '../common/Button'
import { LogoDevelFood } from '../common/Logo'
import { ActionContainer, CheckContainer, Container } from './styles'
import SucessIcon from '../../assets/images/RegisterSucessIcon.svg'


export const RegisterSucess = () => {

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
                <Button>Continuar</Button>
            </ActionContainer>
        </Container>
    )
}
