import { Rating } from "react-simple-star-rating"
import styled from "styled-components";
import { usePagination } from "../../../hooks/usePagination";
import { FeedBackProps } from "../interfaces";
import { apiRestaurantRegister } from "../../../services/backend";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Pagination } from "../../../components/Pagination";


const Container = styled.div`
    width:98%;
    min-width:567px;

    hr{
        margin-bottom:55px;
    }

    @media(max-width:1418px){
        min-width:440px;
    }

    @media(max-width:1294px){
        min-width:370px;
    }

    @media(max-width:1235px){
        min-width:320px;
    }

    @media(max-width:1161px){
        min-width:467px;
    }

    @media(max-width:484px){
        min-width:267px;
    }
`

export const FeedbackContent = styled.div`
    width:100%;
`

const MessageFeedback = styled.p`
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 21.09px;
    text-align: left;
    margin-bottom:26px;
`

export const ReviewsRatingAndDate = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;

    span{
        font-size: 1rem;
        font-weight: 400;
        line-height: 18.75px;
        margin-bottom:10px;
    }
`

const MessageContainer = styled.div`
    width:100%;
    height:100%;
    max-height:120px;
    overflow-y:auto;
    margin-bottom:1rem;
`

export const Feedback = () => {
    const itemsPerPage = 3;
    const [feedbacks, setFeedbacks] = useState<FeedBackProps[]>([]);
    const { currentPage, currentItems, paginate } = usePagination<FeedBackProps>({
        itemsPerPage,
        totalItems: feedbacks.length,
    });
    const currentFeedbacks = currentItems(feedbacks);
    const { user } = useContext(AuthContext)

    const fetchFeedbacks = async (id: number | null | undefined) => {
        try {
            const response = await apiRestaurantRegister.get(`/restaurant_evaluation/${id}/evaluations`);
            setFeedbacks(response.data);
        } catch (error) {
            console.log("Erro ao buscar feedbacks:");
        }
    };

    useEffect(() => {
        fetchFeedbacks(user?.id);
    }, []);

    return (
        <>
            {currentFeedbacks.length === 0 ? (
                <p>
                    Você ainda não possui avaliações
                </p>
            ) : (
                currentFeedbacks.map((feedback) => (
                    <Container key={feedback.id} id="feedback-container">
                        <MessageContainer>
                            <MessageFeedback id="feedback-message">{feedback.comment}</MessageFeedback>
                        </MessageContainer>

                        <ReviewsRatingAndDate id="feedback-Reviews">
                            <Rating
                                initialValue={feedback.rating}
                                allowFraction
                                fillColor="#DFCC1B"
                                emptyColor="#E0E0E0"
                                size={30}
                                readonly
                            />
                            <span id="feedback-date">
                                {new Date(feedback.createdAt).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric"
                                }).replace(/\//g, "/")}
                            </span>
                        </ReviewsRatingAndDate>
                        <hr id="divisor-feedback" />
                    </Container>
                ))
            )}

            <Pagination
                currentPage={currentPage}
                totalItems={feedbacks.length}
                itemsPerPage={itemsPerPage}
                onPageChange={paginate}
            />

        </>
    );
};