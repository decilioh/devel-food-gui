import logoLight from '../../../assets/images/logoLight.svg'
import logoDark from '../../../assets/images/logoDark.svg'
import { useTheme } from '../../../hooks/useTheme';

export const LogoDevelFood = () => {
    const { theme } = useTheme();
    const logo = theme.title === 'light' ? logoLight : logoDark;
    return (
        <figure>
            <img src={logo} alt="Logo DevelFood" />
        </figure>
    )
}
