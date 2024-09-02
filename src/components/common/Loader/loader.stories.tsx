import { Decorator, Meta, StoryObj } from "@storybook/react"
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../../assets/styles/theme";
import { Loader } from './index'
import { AuthProvider } from "../../../context/AuthContext";
import { MoonLoader } from "react-spinners";


export default {
    title: 'Components/Loader',
    component: Loader,
} as Meta;

const colorSpinnerLight = '#071A40'
const colorSpinnerDark = '#07D9D9'

const asLightTheme: Decorator = (Story) => (
    <ThemeProvider theme={lightTheme}>
        <AuthProvider>
            <div>
                <MoonLoader color={colorSpinnerLight} size={70} />
            </div>
        </AuthProvider>
    </ThemeProvider>
);

const asDarkTheme: Decorator = (Story) => (
    <ThemeProvider theme={darkTheme}>
        <AuthProvider>
            <div>
                <MoonLoader color={colorSpinnerDark} size={70} />
            </div>
        </AuthProvider>
    </ThemeProvider>
)

export const LightTheme: StoryObj = {
    decorators: [asLightTheme]
}

export const DarkTheme: StoryObj = {
    decorators: [asDarkTheme]
}