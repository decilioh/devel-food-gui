import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/route";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/styles/theme";
import { GlobalStyle } from "./assets/styles/global";

export default function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </>
  );
}
