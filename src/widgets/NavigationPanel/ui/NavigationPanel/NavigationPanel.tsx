import { Outlet } from "react-router";
import styles from "./NavigationPanel.module.css";
import { ChangeThemeButton } from "@features/ChangeTheme";
import { tabs } from "@widgets/NavigationPanel/model/tabs";
import { NavigationTab } from "../NavigationTab/NavigationTab";

export function NavigationPanel() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    {tabs.map((tab) => (
                        <NavigationTab
                            key={`nav-${tab.title + "-" + tab.path}`}
                            tab={tab}
                        />
                    ))}
                </nav>
                <ChangeThemeButton />
            </header>
            <Outlet />
        </div>
    );
}
