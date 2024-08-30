import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from 'styled-components';
import { useWindowSize } from '../../../hooks/useWindowSize';

const ReviewValue = styled.p`
    font-size:2.5rem;
    font-weight:700;
    line-height:46.88px;
`

export const Reviews = () => {
    const [rating, setRating] = useState<number>(4.5);
    const { width } = useWindowSize();

    const handleRating = (rate: number) => {
        setRating(rate / 20)
    };

    const sizeRating = width < 680;

    return (
        <>
            <Rating
                onClick={handleRating}
                initialValue={rating}
                allowFraction
                fillColor="#FFE500"
                emptyColor="#E0E0E0"
                size={sizeRating ? 70 : 100}
                readonly
            />
            <ReviewValue id="rating-value">{rating.toFixed(1)}/5.0</ReviewValue>
        </>
    )
}
