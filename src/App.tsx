import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/route";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyle } from "./assets/styles/global";
import { SidebarProvider } from "./context/SiderbarContext";
import { AuthProvider } from "./context/AuthContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RestaurantRegisterProvider } from "./context/RegisterRestaurant/RegisterRestaurantContext";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <RestaurantRegisterProvider>
          <AuthProvider>
            <SidebarProvider>
              <Helmet titleTemplate='%s | DevelFood' />
              <RouterProvider router={Router} />
            </SidebarProvider>
          </AuthProvider>
        </RestaurantRegisterProvider>
      </ThemeProvider>
    </HelmetProvider>

  );
}
