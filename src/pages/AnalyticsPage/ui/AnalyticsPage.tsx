import { BestTrade } from "@widgets/BestTrade";
import { Pnl } from "@widgets/Pnl";
import { WinRate } from "@widgets/WinRate";
import styles from "./AnalyticsPage.module.css"

export function AnalyticsPage() {
    return (
        <main className={styles.main}>
            <WinRate />
            <Pnl />
            <BestTrade />
        </main>
    );
}
