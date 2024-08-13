import { ChangeEvent, ReactNode, useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Container, ErrorMessage, IconWrapper, InputWrapper, StyledInput } from "./styles";

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
    icon?: ReactNode;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}



export const Input = ({ icon, error, placeholder, register, type, rules, name, onChange }: InputProps) => {
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
                />

                {type === "password" && (
                    <IconWrapper onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </IconWrapper>
                )}
            </InputWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};