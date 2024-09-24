import { Button } from '../common/Button'
import { LogoDevelFood } from '../common/Logo'
import { ActionContainer, CheckContainer, Container, LogoContainer } from './styles'
import SucessIcon from '../../assets/images/RegisterSucessIcon.svg'
import { useNavigate } from 'react-router-dom'
import { useRestaurantRegister } from '../../context/RegisterRestaurant/RegisterRestaurantContext'

export const RegisterSucess = () => {
    const navigate = useNavigate();
    const { setStep } = useRestaurantRegister()

    function handleContinue() {
        navigate('/')
        setStep(1)
    }

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
                <Button id='continue-button' onClick={() => handleContinue()}>
                    Continuar
                </Button>
            </ActionContainer>
        </Container>
    )
}
