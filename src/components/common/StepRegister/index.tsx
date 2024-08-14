import { useTheme } from "../../../hooks/useTheme";


interface StepRegisterProps {
    lightSrc: string;
    darkSrc: string;
    alt: string;
}

export const StepRegister = ({ lightSrc, darkSrc, alt }: StepRegisterProps) => {
    const { theme } = useTheme();
    return (
        <img
            src={theme.title === 'light' ? lightSrc : darkSrc}
            alt={alt}
        />

    )
}
