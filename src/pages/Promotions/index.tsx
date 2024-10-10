import { Button } from "../../components/common/Button"
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { useNavigate } from "react-router-dom";
import { PromotionItem } from "./components/PromotionItem/PromotionItem"
import { Helmet } from "react-helmet-async";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { PromotionProps } from "./interface";
import { useContext, useEffect, useState } from "react";
import { getPromotions } from "../../services/getAllPromotion";
import { AuthContext } from "../../context/AuthContext";
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

type PromoCardData = {
    idPromotion: number;
    name: string
    imageUrl: string,
}

export const Promotions = () => {
    const itemsPerPage = 8;
    const [promotions, setPromotions] = useState<PromotionProps[]>([]);
    const [filteredPromotions, setFilteredPromotions] = useState<PromotionProps[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [shouldFetch, setShouldFetch] = useState(true);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { currentPage, currentItems, paginate } = usePagination<PromotionProps>({
        itemsPerPage,
        totalItems: promotions.length,
    });

    const currentPromotions = currentItems(filteredPromotions);
    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                if (user?.id) {
                    const response = await getPromotions(user.id);

                    const formattedPromotions = response.map((promo: PromoCardData) => ({
                        promotionId: promo.idPromotion,
                        promotionName: promo.name,
                        promotionImage: promo.imageUrl,
                    }));
                    setPromotions(formattedPromotions);
                    setFilteredPromotions(formattedPromotions)
                }
            } catch (error) {
                throw new Error('Falha ao buscar promoções');
            }
        };

        if (shouldFetch) {
            fetchPromotions();
            setShouldFetch(false);
        }
    }, [shouldFetch]);

    useEffect(() => {
        const filtered = promotions.filter(promo =>
            promo.promotionName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPromotions(filtered);
    }, [searchTerm, promotions]);


    const handleDishDeleted = () => {
        setShouldFetch(true);
    };


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
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ButtonSearch id="button-search">
                            <img src={SearchIcon} alt="Botão pesquisar" />
                        </ButtonSearch>
                    </Form>
                </HeaderContent>
            </Header>

            <SectionProductsList id="section-dish-container">
                {promotions.length === 0 ? (
                    <NoItemsMessage>
                        Você não possui promoções ativas no momento.<br />
                        Clique no botão acima para adicionar uma!
                    </NoItemsMessage>
                ) : (
                    currentPromotions.map((promo) => (
                        <PromotionItem
                            title={promo.promotionName}
                            id={promo.promotionId}
                            key={promo.promotionId}
                            urlPhoto={promo.promotionImage}
                            onDelete={handleDishDeleted}
                        />
                    ))
                )}
            </SectionProductsList>
            <Pagination
                currentPage={currentPage}
                totalItems={promotions.length}
                itemsPerPage={itemsPerPage}
                onPageChange={paginate}
            />
        </Container>
    )
}
