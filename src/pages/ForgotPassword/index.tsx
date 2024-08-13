import { useState } from "react";
import { RequestEmail } from "../../components/RequestEmail";
import { Main } from "./styles";

export const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const handleEmailSubmit = (email: string) => {
        setEmail(email);
        setStep(2);
    };

    const handleCodeSubmit = (code: string) => {
        setCode(code);
        setStep(3);
    };

    const handlePassWordReset = () => {
        console.log('Senha redefinida com sucesso!');
    }

    return (
        <Main>
            {step === 1 && <RequestEmail onSubmit={handleEmailSubmit} />}
        </Main>
    )
}
