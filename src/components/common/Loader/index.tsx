import { MoonLoader } from "react-spinners"
import styled from "styled-components"
import { useTheme } from "../../../hooks/useTheme"

const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100vh;

    div{
        z-index: 9999;
    }
`

export const Loader = () => {
    const { theme } = useTheme();
    const colorSpinner = theme.title === 'light' ? '#071A40' : '#07D9D9';
    return (
        <LoaderContainer>
            <div>
                <MoonLoader color={colorSpinner} size={70} id="loader-component" />
            </div>
        </LoaderContainer>
    )
}
