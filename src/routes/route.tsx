import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { ForgotPassword } from "../pages/ForgotPassword";
import { RegisterRestaurant } from "../pages/RegisterRestaurant";
import { Error404WithoutUser } from "../pages/ErrorWithoutUser";
import { Home } from "../pages/Home";
import { LayoutLogged } from "../components/layout";
import { ErrorUserLogged } from "../pages/ErrorUserLogged";


export const Router = createBrowserRouter([
    {
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
            }
        ]
    },
    {
        path: '/admin',
        element: <LayoutLogged />,
        errorElement: <ErrorUserLogged />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "*",
                element: <ErrorUserLogged />
            }
        ]
    }
])