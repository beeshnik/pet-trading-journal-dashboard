import { ROUTES } from "@shared/config";

export type TabType = {
    title: string,
    path: string
}

export const tabs: TabType[] = [
    {
        title: "Дашборд",
        path: "/",
    },
    {
        title: "Добавить сделку",
        path: ROUTES.CREATE_TRADE,
    },
];