import { InputHTMLAttributes, ReactNode, useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Container, ErrorContainer, ErrorMessage, IconWrapper, InputWrapper, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
    icon?: ReactNode;
    id: string;
}



export const Input = ({ icon, error, placeholder, register, type, rules, name, id, ...props }: InputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    };
    return (
        <Container tabIndex={-1}>
            <InputWrapper $hasError={!!error} tabIndex={-1}>
                <IconWrapper tabIndex={-1}>{icon}</IconWrapper>
                <StyledInput
                    placeholder={placeholder}
                    {...register(name, rules)}
                    type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
                    id={id}
                    {...props}
                />

                {type === "password" && (
                    <IconWrapper onClick={togglePasswordVisibility} tabIndex={-1}>
                        {isPasswordVisible ? <HiEye /> : <HiEyeOff />}
                    </IconWrapper>
                )}
            </InputWrapper>
            <ErrorContainer tabIndex={-1}>
                {error && <ErrorMessage tabIndex={-1}>{error}</ErrorMessage>}
            </ErrorContainer>
        </Container>
    );
};