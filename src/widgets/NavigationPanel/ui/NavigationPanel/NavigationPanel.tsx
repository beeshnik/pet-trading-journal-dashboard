import { Outlet } from "react-router";
import styles from "./NavigationPanel.module.css";
import { ChangeThemeButton } from "@features/ChangeTheme";
import { tabs } from "@widgets/NavigationPanel/model/tabs";
import { NavigationTab } from "../NavigationTab/NavigationTab";
import { useState } from "react";

export function NavigationPanel() {
    const [chosen, setChosen] = useState(tabs[0].title)

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.navigation}>
                    {tabs.map((tab) => (
                        <NavigationTab tab={tab} setChosen={setChosen} chosen={chosen} />
                    ))}
                </div>
                <ChangeThemeButton />
            </header>
            <Outlet />
        </div>
    );
}
