import { ImgHTMLAttributes } from "react";
import { useTheme } from "../../../hooks/useTheme";


interface StepRegisterProps extends ImgHTMLAttributes<HTMLElement> {
    lightSrc: string;
    darkSrc: string;
    alt: string;
}

export const StepRegister = ({ lightSrc, darkSrc, alt }: StepRegisterProps) => {
    const { theme } = useTheme();
    return (
        <img
            id="form-step"
            src={theme.title === 'light' ? lightSrc : darkSrc}
            alt={alt}
        />

    )
}
