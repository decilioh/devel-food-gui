import { useState } from "react";
import { Main } from "./styles";
import { RestaurantData } from "../../components/RestarauntData";
import { restaurantDataRegister } from "./interfaces";



export const RegisterRestaurant = () => {
    const [step, setStep] = useState(1);

    const handleRestaurantDataSubmit = (data: restaurantDataRegister) => {
        console.log(data)
        setStep(2);
    };

    return (
        <Main>
            {step === 1 && <RestaurantData onSubmit={handleRestaurantDataSubmit} />}
        </Main>
    )
}