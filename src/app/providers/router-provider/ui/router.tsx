import { createBrowserRouter } from "react-router";
import { ROUTES } from "@shared/config";
import { DashboardPage } from "@pages/DashboardPage";
import { NavigationPanel } from "@widgets/NavigationPanel";
import { CreateTradePage } from "@pages/CreateTradePage";
import { AnalyticsPage } from "@pages/AnalyticsPage";

export const router = createBrowserRouter([
    {
        element: <NavigationPanel />,
        children: [
            {
                path: ROUTES.DASHBOARD.path,
                element: <DashboardPage />,
            },
            {
                path: ROUTES.CREATE_TRADE.path,
                element: <CreateTradePage />,
            },
            {
                path: ROUTES.ANALYTICS.path,
                element: <AnalyticsPage />,
            },
        ],
    },
]);
