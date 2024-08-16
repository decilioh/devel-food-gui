import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";




export const Router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <Login />
            }
        ]
    }
])