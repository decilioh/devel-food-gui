import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { ForgotPassword } from "../pages/ForgotPassword";
import { RegisterRestaurant } from "../pages/RegisterRestaurant";
import { Error404WithoutUser } from "../pages/ErrorWithoutUser";
import { Home } from "../pages/Home";
import { LayoutLogged } from "../components/layout";
import { ErrorUserLogged } from "../pages/ErrorUserLogged";
import { PrivateRoute } from "./private";
import { Menu } from "../pages/Menu";
import { NewDish } from "../pages/NewDish";


export const Router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error404WithoutUser />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/esqueci-minha-senha",
                element: <ForgotPassword />
            },
            {
                path: "/cadastrar",
                element: <RegisterRestaurant />
            },
            {
                path: '*',
                element: <Error404WithoutUser />
            }
        ]
    },
    {
        path: '/admin',
        element: <PrivateRoute><LayoutLogged /></PrivateRoute>,
        errorElement: <PrivateRoute><ErrorUserLogged /></PrivateRoute>,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "menu/prato",
                element: <NewDish />
            },
            {
                path: "*",
                element: <ErrorUserLogged />
            }
        ]
    }
])