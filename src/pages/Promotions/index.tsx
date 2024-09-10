import { Button } from "../../components/common/Button"
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { ButtonContainer, ButtonSearch, Container, Form, Header, HeaderContent, InputSearch, NoItemsMessage, SectionProductsList, TitleContainer } from "./styles"
import { useNavigate } from "react-router-dom";
import { PromotionsMock } from "../../mocks/promotionsMock";
import { PromotionItem } from "./components/PromotionItem/PromotionItem"


export const Promotions = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Header id='header-container'>
                <HeaderContent id="Header-Content">
                    <ButtonContainer>
                        <Button onClick={() => navigate('/admin/promocoes/cadastrar')} id="button-new-promo">
                            Nova promoção
                        </Button>
                    </ButtonContainer>

                    <TitleContainer>
                        <h1 id="title-page">Suas promoções</h1>
                    </TitleContainer>

                    <Form id="form-search">
                        <InputSearch
                            type="text"
                            placeholder="Nome da promoção"
                            id="input-search"
                        />
                        <ButtonSearch id="button-search">
                            <img src={SearchIcon} alt="Botão pesquisar" />
                        </ButtonSearch>
                    </Form>
                </HeaderContent>
            </Header>

            <SectionProductsList id="section-dish-container">
                {PromotionsMock.length === 0 ? (
                    <NoItemsMessage>
                        Você não possui promoções ativas no momento.<br />
                        Clique no botão acima para adicionar uma!
                    </NoItemsMessage>
                ) : (
                    PromotionsMock.map((promo) => (
                        <PromotionItem
                            title={promo.promotionName}
                            id={promo.promotionId}
                            key={promo.promotionId}
                            urlPhoto={promo.promotionImage}
                        />
                    ))
                )}
            </SectionProductsList>
        </Container>
    )
}
