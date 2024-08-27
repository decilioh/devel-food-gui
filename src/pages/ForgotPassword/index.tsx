import { useState } from "react";
import { RequestEmail } from "../../components/RequestEmail";
import { VerifyCode } from "../../components/VerifyCode";
import { Main } from "./styles";
import { ResetPassword } from "../../components/ResetPassword";

export const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');

    const handleEmailSubmit = (email: string) => {
        setEmail(email);
        setStep(2);
    };

    const returnNavigate = () => {
        setStep(prevStep => Math.max(prevStep - 1, 1));
    }

    const handleCodeSubmit = () => {
        setStep(3);
    };

    const handlePassWordReset = () => {
        console.log('Senha redefinida com sucesso!');
    }

    return (
        <Main>
            {step === 1 && <RequestEmail onSubmit={handleEmailSubmit} />}
            {step === 2 && <VerifyCode onSubmit={handleCodeSubmit} navigate={returnNavigate} />}
            {step === 3 && <ResetPassword onSubmit={handlePassWordReset} navigate={returnNavigate} />}
        </Main>
    )
}
