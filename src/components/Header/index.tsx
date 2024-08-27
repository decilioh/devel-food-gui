import styled from 'styled-components'
import logoLight from '../../assets/images/HeaderLight.svg'
import logoDark from '../../assets/images/HeaderDark.svg'
import { useTheme } from '../../hooks/useTheme'

const HeaderStyle = styled.header`
    background-color:${({ theme }) => theme.colors.primary};
    display:flex;
    justify-content:center;
    align-items:center;
    padding:.5rem;
`


export const Header = () => {
    const { theme } = useTheme();
    const logo = theme.title === 'light' ? logoLight : logoDark;
    return (
        <HeaderStyle>
            <div>
                <img src={logo} alt="" />
            </div>
        </HeaderStyle>
    )
}