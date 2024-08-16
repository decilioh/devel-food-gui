import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { ForgotPassword } from "../pages/ForgotPassword";
import { RegisterRestaurant } from "../pages/RegisterRestaurant";




export const Router = createBrowserRouter([
    {
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
    }
])