import { useNavigate } from "react-router";
import type { TabType } from "../../model/tabs";
import styles from "./NavigationTab.module.css";

type Props = {
    tab: TabType;
    chosen: string;
    setChosen: (tabName: string) => void;
};

export function NavigationTab({ tab, chosen, setChosen }: Props) {
    const navigate = useNavigate();

    const onClickHandler = () => {
        setChosen(tab.title);
        navigate(tab.path);
    };

    return (
        <nav
            onClick={onClickHandler}
            className={styles.container}
            data-tab-chosen={chosen === tab.title ? "chosen" : "notChosen"}
        >
            {tab.title}
        </nav>
    );
}
