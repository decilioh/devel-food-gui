import { ChangeEvent, ReactNode } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { Container, ErrorMessage, IconWrapper, SelectWrapper, StyledSelect } from "./styles";

interface SelectProps {
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
    icon?: ReactNode;
    children: ReactNode;
}



export const Select = ({ icon, error, register, rules, name, children }: SelectProps) => {
    return (
        <Container>
            <SelectWrapper $hasError={!!error}>
                <IconWrapper>{icon}</IconWrapper>
                <StyledSelect
                    {...register(name, rules)}
                    name={name}
                >
                    {children}
                </StyledSelect>

            </SelectWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};