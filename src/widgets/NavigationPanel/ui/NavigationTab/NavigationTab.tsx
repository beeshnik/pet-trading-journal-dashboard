import { NavLink } from "react-router";
import type { TabType } from "../../model/tabs";
import styles from "./NavigationTab.module.css";

type Props = {
    tab: TabType;
};

export function NavigationTab({ tab }: Props) {
    return (
        <NavLink
            to={tab.path}
            className={({ isActive }) =>
                isActive ? styles.containerChosen : styles.container
            }
        >
            {tab.title}
        </NavLink>
    );
}
