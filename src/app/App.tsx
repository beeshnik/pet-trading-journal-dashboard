import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./providers/store";
import { router } from "./providers/router-provider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreProvider store={store}>
            <RouterProvider router={router} />
        </StoreProvider>
    </StrictMode>,
);
