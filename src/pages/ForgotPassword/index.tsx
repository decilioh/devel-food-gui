import { useState } from "react";
import { RequestEmail } from "../../components/RequestEmail";
import { VerifyCode } from "../../components/VerifyCode";
import { Main } from "./styles";

export const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');

    const handleEmailSubmit = (email: string) => {
        setEmail(email);
        setStep(2);
    };

    const handleCodeSubmit = () => {
        setStep(3);
    };

    const handlePassWordReset = () => {
        console.log('Senha redefinida com sucesso!');
    }

    return (
        <Main>
            {step === 1 && <RequestEmail onSubmit={handleEmailSubmit} />}
            {step === 2 && <VerifyCode onSubmit={handleCodeSubmit} />}
            {step === 3 && <div>Step 3: Reset Password Component</div>}
        </Main>
    )
}
