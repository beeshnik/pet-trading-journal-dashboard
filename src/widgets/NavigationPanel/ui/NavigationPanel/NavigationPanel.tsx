import { Outlet } from "react-router";
import styles from "./NavigationPanel.module.css";
import { ChangeThemeButton } from "@features/ChangeTheme";
import { tabs } from "@widgets/NavigationPanel/model/tabs";
import { NavigationTab } from "../NavigationTab/NavigationTab";

export function NavigationPanel() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.navigation}>
                    {tabs.map((tab) => (
                        <NavigationTab tab={tab}/>
                    ))}
                </div>
                <ChangeThemeButton />
            </header>
            <Outlet />
        </div>
    );
}
