import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/route";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyle } from "./assets/styles/global";
import { SidebarProvider } from "./context/SiderbarContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <SidebarProvider>
          <RouterProvider router={Router} />
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}
