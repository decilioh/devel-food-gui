import { MenuItem } from "./components/MenuItem/MenuItem"
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { usePagination } from "../../hooks/usePagination";
import { DishProps } from "./interface";
import { useContext, useEffect, useState } from "react";
import { apiRestaurantRegister } from "../../services/backend";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/common/Button";
import { Pagination } from "../../components/Pagination";
import {
    ButtonContainer,
    ButtonSearch,
    Container,
    Form,
    Header,
    HeaderContent,
    InputSearch,
    SectionProductsList,
    TitleContainer
} from "./styles"

export const Menu = () => {
    const itemsPerPage = 8;
    const { user } = useContext(AuthContext)
    const [dishes, setDishes] = useState<DishProps[]>([]);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDishes, setFilteredDishes] = useState<DishProps[]>([]);
    const navigate = useNavigate();

    const { currentPage, currentItems, paginate } = usePagination<DishProps>({
        itemsPerPage,
        totalItems: dishes.length,
    });
    const currentDishes = currentItems(filteredDishes);

    const handleDishDeleted = () => {
        setShouldFetch(true);
    };

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const restaurantId = user?.id
                const response = await apiRestaurantRegister(`/dish/restaurant/${restaurantId}`);
                setDishes(response.data.content || []);
                setFilteredDishes(response.data.content || []);


            } catch (error) {
                console.error('Failed to fetch dishes:', error);
            }
        };

        if (shouldFetch) {
            fetchDishes();
            setShouldFetch(false);
        }

        fetchDishes();
    }, [shouldFetch]);

    useEffect(() => {
        const filtered = dishes.filter(dish =>
            dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDishes(filtered);
    }, [searchTerm, dishes]);


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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ButtonSearch id="button-search">
                            <img src={SearchIcon} alt="Botão pesquisar" />
                        </ButtonSearch>
                    </Form>
                </HeaderContent>
            </Header>

            <SectionProductsList id="section-dish-container">

                {currentDishes.length > 0 ? currentDishes.map((dish) =>
                    <MenuItem
                        title={dish.dishName}
                        id={dish.id}
                        key={dish.id}
                        photo={dish.photo}
                        onDelete={handleDishDeleted}
                    />
                ) :
                    <>
                        <span>Não possui pratos no momento</span>
                    </>
                }

            </SectionProductsList>
            <Pagination
                currentPage={currentPage}
                totalItems={dishes.length}
                itemsPerPage={itemsPerPage}
                onPageChange={paginate}
            />
        </Container>
    )
}
