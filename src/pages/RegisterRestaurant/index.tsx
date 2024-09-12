import { useState } from "react";
import { Main } from "./styles";
import { RestaurantData } from "../../components/RestarauntData";
import { RestaurantAdreesDataProps, RestaurantDataRegister, RestaurantTypeDataProps } from "./interfaces";
import { RestaurantType } from "../../components/RestaurantType";
import { RestaurantAdress } from "../../components/AdressRestaurant";
import { RegisterSucess } from "../../components/RegisterSucess";
import { RegisterError } from "../../components/RegisterError";
import { Helmet } from "react-helmet-async";

export const RegisterRestaurant = () => {

    const [step, setStep] = useState(1);

    const handleRestaurantDataSubmit = (data: RestaurantDataRegister) => {
        console.log(data)
        setStep(2);
    };

    const handleRestaurantTypeSubmit = (data: RestaurantTypeDataProps) => {
        console.log(data)
        setStep(3);
    };

    const handleRestaurantDataAdress = (data: RestaurantAdreesDataProps) => {
        console.log(data)
        setStep(4)
    }

    const handleRegisterSucess = () => {
        setStep(5)
    }

    const returnNavigate = () => {
        setStep(prevStep => Math.max(prevStep - 1, 1));
    }

    return (
        <Main>
            <Helmet title="Cadastre-se" />
            {step === 1 && <RestaurantData onSubmit={handleRestaurantDataSubmit} />}
            {step === 2 && <RestaurantType onSubmit={handleRestaurantTypeSubmit} navigate={returnNavigate} />}
            {step === 3 && <RestaurantAdress onSubmit={handleRestaurantDataAdress} navigate={returnNavigate} />}
            {step === 4 && <RegisterSucess onSubmit={handleRegisterSucess} />}
            {step === 5 && <RegisterError />}
        </Main>
    )
}