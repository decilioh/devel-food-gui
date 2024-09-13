import { Button } from "../../components/common/Button"
import { MenuItem } from "./components/MenuItem/MenuItem"
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { ButtonContainer, ButtonSearch, Container, Form, Header, HeaderContent, InputSearch, SectionProductsList, TitleContainer } from "./styles"
import { useNavigate } from "react-router-dom";
import { mockDish } from "../../mocks/dishMock";
import { Helmet } from "react-helmet-async";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";

export const Menu = () => {
    const itemsPerPage = 8;
    const { currentPage, currentItems, paginate } = usePagination({
        itemsPerPage,
        totalItems: mockDish.length,
    });
    const currentDishes = currentItems(mockDish);
    const navigate = useNavigate();

    return (
        <Container>
            <Helmet title="Menu" />
            <Header id='header-container'>
                <HeaderContent id="Header-Content">
                    <ButtonContainer>
                        <Button onClick={() => navigate('/admin/menu/prato')} id="button-new-plate">
                            Novo prato +
                        </Button>
                    </ButtonContainer>

                    <TitleContainer>
                        <h1 id="title-page">Menu do restaurante</h1>
                    </TitleContainer>

                    <Form id="form-search">
                        <InputSearch
                            type="text"
                            placeholder="Nome do prato"
                            id="input-search"
                        />
                        <ButtonSearch id="button-search">
                            <img src={SearchIcon} alt="Botão pesquisar" />
                        </ButtonSearch>
                    </Form>
                </HeaderContent>
            </Header>

            <SectionProductsList id="section-dish-container">
                {currentDishes.map((dish) =>
                    <MenuItem title={dish.title} id={dish.id} key={dish.id} />
                )}

            </SectionProductsList>
            <Pagination
                currentPage={currentPage}
                totalItems={mockDish.length}
                itemsPerPage={itemsPerPage}
                onPageChange={paginate}
            />
        </Container>
    )
}
