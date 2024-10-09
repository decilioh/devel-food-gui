import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyle } from "./assets/styles/global";
import { SidebarProvider } from "./context/SiderbarContext";
import { AuthProvider } from "./context/AuthContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RestaurantRegisterProvider } from "./context/RegisterRestaurant/RegisterRestaurantContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Router } from "./routes/route";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <AuthProvider>
          <RestaurantRegisterProvider>
            <SidebarProvider>
              <Helmet titleTemplate='%s | DevelFood' />
              <DndProvider backend={HTML5Backend}>
                <RouterProvider router={Router} />
              </DndProvider>
            </SidebarProvider>
          </RestaurantRegisterProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>

  );
}
