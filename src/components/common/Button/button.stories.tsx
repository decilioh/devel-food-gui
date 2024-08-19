import { Decorator, Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from './index'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../../assets/styles/theme";

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const asLightTheme: Decorator = (Story) => (
    <ThemeProvider theme={lightTheme}>
        <Story />
    </ThemeProvider>
);

const asDarkTheme: Decorator = (Story) => (
    <ThemeProvider theme={darkTheme}>
        <Story />
    </ThemeProvider>
)

export const LightTheme: StoryObj<ButtonProps> = {
    args: {
        children: "Tema Claro",
    },
    decorators: [asLightTheme]
}

export const DarkTheme: StoryObj<ButtonProps> = {
    args: {
        children: "Tema Escuro",
    },
    decorators: [asDarkTheme]
}