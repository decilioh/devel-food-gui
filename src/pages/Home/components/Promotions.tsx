import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { usePagination } from "../../../hooks/usePagination";
import { ReviewProps } from "../interfaces";
import { apiRestaurantRegister } from "../../../services/backend";
import { AuthContext } from "../../../context/AuthContext";
import { Pagination } from "../../../components/Pagination";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

export const Promotions = () => {
    const [promoImages, setPromoImages] = useState<ReviewProps[]>([]);
    const itemsPerPage = 2;
    const { user } = useContext(AuthContext)

    const { currentPage, currentItems, paginate } = usePagination<ReviewProps>({
        itemsPerPage,
        totalItems: promoImages.length,
    });

    const currentImages = currentItems(promoImages);

    const fetchPromotions = async (id: number | undefined | null) => {
        try {
            const response = await apiRestaurantRegister.get(`/promotions/restaurant/${id}`);
            setPromoImages(response.data);
        } catch (error) {
            console.log("Erro ao buscar promoções:");
        }
    };

    useEffect(() => {
        fetchPromotions(user?.id);
    }, []);

    return (
        <Container>
            <ImageContainer>
                {
                    promoImages.length === 0 ? (
                        <p>
                            Você não possui promoções ativas no momento
                        </p>
                    ) : (
                        currentImages.map((image) => (
                            <figure key={image.idPromotion}>
                                <img src={image.imageUrl} alt="" />
                            </figure>
                        ))
                    )
                }

            </ImageContainer>
            <PaginationContainer>
                <Pagination
                    currentPage={currentPage}
                    totalItems={promoImages.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={paginate}
                />
            </PaginationContainer>
        </Container>
    );
};
