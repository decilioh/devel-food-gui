import styled from "styled-components";
import { promoImageMock } from "../../../mocks/promoMock";
import { usePagination } from "../../../hooks/usePagination";
import { Pagination } from "../../../components/Pagination";
import { ReviewProps } from "../interfaces";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const Promotions = () => {

    const itemsPerPage = 2;
    const { currentPage, currentItems, paginate } = usePagination<ReviewProps>({
        itemsPerPage,
        totalItems: promoImageMock.length,
    });
    const currentImages = currentItems(promoImageMock);

    return (
        <Container>
            <ImageContainer>
                {currentImages.map((image) => (
                    <figure key={image.id}>
                        <img src={image.url} alt="" />
                    </figure>
                ))}
            </ImageContainer>
            <Pagination
                currentPage={currentPage}
                totalItems={promoImageMock.length}
                itemsPerPage={itemsPerPage}
                onPageChange={paginate}
            />
        </Container>
    );
}
