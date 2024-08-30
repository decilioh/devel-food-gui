import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/route";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyle } from "./assets/styles/global";
import { SidebarProvider } from "./context/SiderbarContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AuthProvider>
        <SidebarProvider>
          <RouterProvider router={Router} />
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
