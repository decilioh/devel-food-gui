import { useContext, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from 'styled-components';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { apiRestaurantRegister } from '../../../services/backend';
import { AuthContext } from '../../../context/AuthContext';

const ReviewValue = styled.p`
    font-size:2.5rem;
    font-weight:700;
    line-height:46.88px;
`

export const Reviews = () => {
    const [rating, setRating] = useState<number>(0);
    const { width } = useWindowSize();
    const { user } = useContext(AuthContext)

    const handleRating = (rate: number) => {
        setRating(rate / 20)
    };

    useEffect(() => {
        const fetchRating = async (id: number | null | undefined) => {
            try {
                const response = await apiRestaurantRegister.get(`/restaurant_evaluation/${id}/average_rating`);
                const fetchedRating = response.data && typeof response.data === 'number' ? response.data : 0;
                setRating(fetchedRating);
            } catch (error) {
                console.log("Ocorreu um erro ao buscar os dados")
            }
        };

        fetchRating(user?.id);
    }, []);



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
