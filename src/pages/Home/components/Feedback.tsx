import { Rating } from "react-simple-star-rating"
import styled from "styled-components";

const Container = styled.div`
    width:98%;
    max-width:567px;

    hr{
        margin-bottom:55px;
    }
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
    justify-content:space-between;

    span{
        font-size: 1rem;
        font-weight: 400;
        line-height: 18.75px;
        margin-bottom:10px;
    }
`


interface FeedBackProps {
    message: string;
    ratingValue: number;
    date: string;
}

export const Feedback = ({ message, ratingValue, date }: FeedBackProps) => {
    return (
        <Container id="feedback-container">
            <MessageFeedback id="feedback-message">{message}</MessageFeedback>

            <ReviewsRatingAndDate id="feedback-Reviews">
                <Rating
                    initialValue={ratingValue}
                    allowFraction
                    fillColor="#DFCC1B"
                    emptyColor="#E0E0E0"
                    size={30}
                    readonly
                />
                <span id="feedback-date">{date}</span>

            </ReviewsRatingAndDate>
            <hr id="divisor-feedback" />
        </Container>
    )
}
