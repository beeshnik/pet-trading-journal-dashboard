import { createBrowserRouter, Outlet } from "react-router";
import { ROUTES } from "@shared/config";


export const router = createBrowserRouter([
    {
        element: (
            <div>
                <h1>{"United header"}</h1>
                <Outlet />
            </div>
        ),
        children: [
            {
                path: "/",
                element: <h1>{"Dashboard page"}</h1>,
            },
            {
                path: ROUTES.CREATE_TRADE,
                element: <h2>{"Create trade page"}</h2>,
            },
        ],
    },
]);