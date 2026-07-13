import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import { router, store } from "./providers";
import { Provider as StoreProvider } from "react-redux";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StoreProvider store={store}>
            <RouterProvider router={router} />
        </StoreProvider>
    </StrictMode>,
);
