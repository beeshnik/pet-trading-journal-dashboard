import { useNavigate } from "react-router";
import type { TabType } from "../../model/tabs";
import styles from "./NavigationTab.module.css";

type Props = {
    tab: TabType;
};

export function NavigationTab({ tab }: Props) {
    const navigate = useNavigate();
    
    return (
        <nav onClick={() => navigate(tab.path)} className={styles.container}>
            {tab.title}
        </nav>
    );
}
