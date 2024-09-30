import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/route";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyle } from "./assets/styles/global";
import { SidebarProvider } from "./context/SiderbarContext";
import { AuthProvider } from "./context/AuthContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RestaurantRegisterProvider } from "./context/RegisterRestaurant/RegisterRestaurantContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <RestaurantRegisterProvider>
          <AuthProvider>
            <SidebarProvider>
              <Helmet titleTemplate='%s | DevelFood' />
              <DndProvider backend={HTML5Backend}>
                <RouterProvider router={Router} />
              </DndProvider>
            </SidebarProvider>
          </AuthProvider>
        </RestaurantRegisterProvider>
      </ThemeProvider>
    </HelmetProvider>

  );
}
