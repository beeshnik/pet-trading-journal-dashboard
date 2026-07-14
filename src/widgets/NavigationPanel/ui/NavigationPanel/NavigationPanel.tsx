import { Outlet } from "react-router";
import styles from "./NavigationPanel.module.css";
import { ChangeThemeButton } from "@features/ChangeTheme";
import { NavigationTab } from "../NavigationTab/NavigationTab";
import { ROUTES } from "@shared/config";

export function NavigationPanel() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    {Object.entries(ROUTES).map(([_, value]) => (
                        <NavigationTab
                            key={`nav-${value.name + "-" + value.path}`}
                            tab={value}
                        />
                    ))}
                </nav>
                <ChangeThemeButton />
            </header>
            <Outlet />
        </div>
    );
}
