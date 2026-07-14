import { createBrowserRouter } from "react-router";
import { ROUTES } from "@shared/config";
import { DashboardPage } from "@pages/DashboardPage";
import { NavigationPanel } from "@widgets/NavigationPanel";
import { CreateTradePage } from "@pages/CreateTradePage";

export const router = createBrowserRouter([
    {
        element: <NavigationPanel />,
        children: [
            {
                path: "/",
                element: <DashboardPage />,
            },
            {
                path: ROUTES.CREATE_TRADE,
                element: <CreateTradePage />,
            },
        ],
    },
]);
