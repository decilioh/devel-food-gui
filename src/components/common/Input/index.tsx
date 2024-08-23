import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FaEye } from "react-icons/fa";
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
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    id: string;
}



export const Input = ({ icon, error, placeholder, register, type, rules, name, onChange, id }: InputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    };
    return (
        <Container>
            <InputWrapper $hasError={!!error}>
                <IconWrapper>{icon}</IconWrapper>
                <StyledInput
                    placeholder={placeholder}
                    {...register(name, rules)}
                    type={type === "password" && !isPasswordVisible ? "password" : "text"}
                    name={name}
                    onChange={onChange}
                    id={id}
                />

                {type === "password" && (
                    <IconWrapper onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? <HiEye /> : <HiEyeOff />}
                    </IconWrapper>
                )}
            </InputWrapper>
            <ErrorContainer>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </ErrorContainer>
        </Container>
    );
};