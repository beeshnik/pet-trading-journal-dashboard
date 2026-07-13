import { Outlet, useLocation } from "react-router";
import styles from "./NavigationPanel.module.css";
import { ChangeThemeButton } from "@features/ChangeTheme";
import { tabs } from "@widgets/NavigationPanel/model/tabs";
import { NavigationTab } from "../NavigationTab/NavigationTab";
import { useState } from "react";

export function NavigationPanel() {
    const { pathname } = useLocation();
    const [chosen, setChosen] = useState(
        pathname.split("/").filter((path) => path !== "")[0] || "/",
    );

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.navigation}>
                    {tabs.map((tab) => (
                        <NavigationTab
                            key={`nav-${tab.title + "-" + tab.path}`}
                            tab={tab}
                            setChosen={setChosen}
                            chosen={chosen}
                        />
                    ))}
                </div>
                <ChangeThemeButton />
            </header>
            <Outlet />
        </div>
    );
}
