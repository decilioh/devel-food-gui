import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/assets/styles/global';
import { darkTheme, lightTheme } from '../src/assets/styles/theme';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const GlobalStyles = (Story, context) => {
  const themeName = context.parameters.theme || 'light';
  const theme = themes[themeName];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: 'light',
  },
  decorators: [GlobalStyles],
};

export default preview;
