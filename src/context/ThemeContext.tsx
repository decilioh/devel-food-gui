import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DefaultTheme as Default } from "styled-components/dist/types";

export interface ThemeContextProps {
  theme: Default;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode
}

const defaultContextValue: ThemeContextProps = {
  theme: lightTheme,
  toggleTheme: () => { }
};


export const ThemeContext = createContext<ThemeContextProps>(defaultContextValue);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const getInitialTheme = (): DefaultTheme => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? darkTheme : lightTheme;
  };

  const getInitialToastTheme = (): 'light' | 'dark' => {
    const savedTheme = localStorage.getItem('toastTheme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<DefaultTheme>(getInitialTheme);
  const [toastTheme, setToastTheme] = useState<'light' | 'dark'>(getInitialToastTheme);


  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light');
      return newTheme;
    });

    setToastTheme((prevTheme) => {
      const newToastTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('toastTheme', newToastTheme);
      return newToastTheme;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
    }

    const savedToastTheme = localStorage.getItem('toastTheme');
    if (savedToastTheme) {
      setToastTheme(savedToastTheme as 'light' | 'dark');
    }
  }, []);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <ToastContainer position="top-right" theme={toastTheme} closeOnClick />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};