import { Decorator, Meta, StoryObj } from "@storybook/react"
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../../assets/styles/theme";
import { AuthProvider } from "../../../context/AuthContext";
import { SidebarProvider } from "../../../context/SiderbarContext";
import { SidebarStoryBook } from "./SideBarStorybook";


export default {
    title: 'Components/SideBar',
    component: SidebarStoryBook,
} as Meta;


const asLightTheme: Decorator = (Story) => (
    <ThemeProvider theme={lightTheme}>
        <AuthProvider>
            <SidebarProvider>
                <Story />
            </SidebarProvider>
        </AuthProvider>
    </ThemeProvider>
);

const asDarkTheme: Decorator = (Story) => (
    <ThemeProvider theme={darkTheme}>
        <Story />
    </ThemeProvider>
)

export const LightTheme: StoryObj<typeof SidebarStoryBook> = {
    decorators: [asLightTheme],
    parameters: {
        theme: 'light',
    },
};

export const DarkTheme: StoryObj<typeof SidebarStoryBook> = {
    decorators: [asDarkTheme],
    parameters: {
        theme: 'dark',
    },
};