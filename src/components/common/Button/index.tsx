import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonStyled } from "./styles"


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}


export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>
    )
}