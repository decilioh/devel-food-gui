import { Meta, StoryObj } from "@storybook/react"
import { ThemeProvider } from "styled-components";
import { Header } from ".";
import { SidebarProvider } from "../../context/SiderbarContext";
import { darkTheme, lightTheme } from "../../assets/styles/theme";

export default {
    title: 'Components/Header',
    component: Header,
    decorators: [
        (Story, { parameters }) => {
            const theme = parameters.theme === 'dark' ? darkTheme : lightTheme;
            return (
                <ThemeProvider theme={theme}>
                    <SidebarProvider>
                        <Story />
                    </SidebarProvider>
                </ThemeProvider>
            );
        }
    ],
    parameters: {
        theme: 'light',
    }
} as Meta;

export const LightTheme: StoryObj<typeof Header> = {
    parameters: {
        theme: 'light',
    },
};

export const DarkTheme: StoryObj<typeof Header> = {
    parameters: {
        theme: 'dark',
    },
};