import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonStyled } from "./styles"


interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    children: ReactNode
}


export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>
    )
}