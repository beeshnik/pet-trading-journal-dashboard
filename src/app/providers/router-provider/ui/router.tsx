import { createBrowserRouter } from "react-router";
import { ROUTES } from "@shared/config";
import { DashboardPage } from "@pages/DashboardPage";
import { NavigationPanel } from "@widgets/NavigationPanel";


export const router = createBrowserRouter([
    {
        element: (
            <NavigationPanel />
        ),
        children: [
            {
                path: "/",
                element: <DashboardPage />,
            },
            {
                path: ROUTES.CREATE_TRADE,
                element: <h2>{"Create trade page"}</h2>,
            },
        ],
    },
]);