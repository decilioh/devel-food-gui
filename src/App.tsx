import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/route";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyle } from "./assets/styles/global";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </>
  );
}
