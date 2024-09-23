import { Main } from "./styles";
import { RestaurantData } from "../../components/RestarauntData";
import { RestaurantType } from "../../components/RestaurantType";
import { RestaurantAdress } from "../../components/AdressRestaurant";
import { RegisterSucess } from "../../components/RegisterSucess";
import { RegisterError } from "../../components/RegisterError";
import { Helmet } from "react-helmet-async";
import { useRestaurantRegister } from "../../context/RegisterRestaurant/RegisterRestaurantContext";
import { RestaurantAdreesDataProps, RestaurantDataRegister, RestaurantTypeDataProps } from "../../context/RegisterRestaurant/interfaces";
import { useEffect, useState } from "react";

export const RegisterRestaurant = () => {
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

    const {
        setRestaurantData,
        setRestaurantTypeData,
        setRestaurantAddressData,
        submitAllData,
        setStep,
        step
    } = useRestaurantRegister();

    const handleRestaurantDataSubmit = (data: RestaurantDataRegister) => {
        setRestaurantData(data);
        setStep(2);
    };

    const handleRestaurantTypeSubmit = (data: RestaurantTypeDataProps) => {
        setRestaurantTypeData(data);
        setStep(3);
    };
    const handleRestaurantDataAdress = async (data: RestaurantAdreesDataProps) => {
        setRestaurantAddressData(data);
        setIsReadyToSubmit(true);
    };

    useEffect(() => {
        const submitData = async () => {
            if (isReadyToSubmit) {
                await submitAllData();
                setIsReadyToSubmit(false);
            }
        };

        submitData();
    }, [isReadyToSubmit, submitAllData]);

    const handleRefreshRegister = async () => {
        setStep(1)
    };

    const returnNavigate = () => {
        setStep(prevStep => Math.max(prevStep - 1, 1));

    };

    return (
        <Main>
            <Helmet title="Cadastre-se" />
            {step === 1 && <RestaurantData onSubmit={handleRestaurantDataSubmit} />}
            {step === 2 && <RestaurantType onSubmit={handleRestaurantTypeSubmit} navigate={returnNavigate} />}
            {step === 3 && <RestaurantAdress onSubmit={handleRestaurantDataAdress} navigate={returnNavigate} />}
            {step === 4 && <RegisterSucess />}
            {step === 5 && <RegisterError refreshRegister={handleRefreshRegister} />}
        </Main>
    )
}