import { Button } from "../../components/common/Button"
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { useNavigate } from "react-router-dom";
import { PromotionsMock } from "../../mocks/promotionsMock";
import { PromotionItem } from "./components/PromotionItem/PromotionItem"
import { Helmet } from "react-helmet-async";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import {
    ButtonContainer,
    ButtonSearch,
    Container,
    Form,
    Header,
    HeaderContent,
    InputSearch,
    NoItemsMessage,
    SectionProductsList,
    TitleContainer
} from "./styles"


export const Promotions = () => {
    const itemsPerPage = 8;
    const { currentPage, currentItems, paginate } = usePagination({
        itemsPerPage,
        totalItems: PromotionsMock.length,
    });
    const currentDishes = currentItems(PromotionsMock);
    const navigate = useNavigate();
    return (
        <Container>
            <Helmet title="Promoções" />
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
                    currentDishes.map((promo) => (
                        <PromotionItem
                            title={promo.promotionName}
                            id={promo.promotionId}
                            key={promo.promotionId}
                            urlPhoto={promo.promotionImage}
                        />
                    ))
                )}
            </SectionProductsList>
            <Pagination
                currentPage={currentPage}
                totalItems={PromotionsMock.length}
                itemsPerPage={itemsPerPage}
                onPageChange={paginate}
            />
        </Container>
    )
}
