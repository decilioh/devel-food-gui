import { Decorator, Meta, StoryObj } from "@storybook/react"
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../assets/styles/theme";
import { Modal } from './index'
import { AuthProvider } from "../../../context/AuthContext";
import { ModalContainer, ModalDescription, ModalOverlay } from "./styles";
import { ButtonGroup } from "@mui/material";
import { Button } from "../Button";


export default {
    title: 'Components/Modal',
    component: Modal,
} as Meta;

const asLightTheme: Decorator = (Story) => (
    <ThemeProvider theme={lightTheme}>
        <AuthProvider>
            <ModalOverlay $isOpen={true}>
                <ModalContainer>
                    <ModalDescription>Você tem certeza que deseja realizar esta ação?</ModalDescription>
                    <ButtonGroup>
                        <Button style={{ backgroundColor: '#00D982', width: '200px', marginRight: '10px' }}>Sim</Button>
                        <Button style={{ backgroundColor: '#C90000', width: '200px', marginLeft: '10px' }}>Não</Button>
                    </ButtonGroup>
                </ModalContainer>
            </ModalOverlay>
        </AuthProvider>
    </ThemeProvider>
);


export const Default: StoryObj = {
    decorators: [asLightTheme]
}
