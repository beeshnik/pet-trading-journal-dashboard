import type { Trade } from "@shared/api/generatedApi";
import styles from "../style/TradeCard.module.css";

type Props = {
    trade: Trade;
};

export function TradeCard({ trade }: Props) {
    const openDate = new Date(trade.openDate);
    const closeDate = new Date(trade.closeDate);

    return (
        <article className={styles.TradeCardContainer}>
            <h3 className={styles.TradeCardHeader}>{trade.instrument}</h3>
            <section className={styles.TradeCardCommonSection}>
                <label className={styles.TradeCardLabel}>{"Открытие"}</label>
                <p className={styles.TradeCardDate}>
                    {openDate.toLocaleString("RU-ru")}
                </p>
            </section>
            <section className={styles.TradeCardCommonSection}>
                <label className={styles.TradeCardLabel}>{"Закрытие"}</label>
                <p className={styles.TradeCardDate}>
                    {closeDate.toLocaleString("RU-ru")}
                </p>
            </section>
            <section className={styles.TradeCardCommonSection}>
                <label className={styles.TradeCardLabel}>{"P&L"}</label>
                <p className={styles.TradeCardPnl}>{trade.pnl}</p>
            </section>
            <section className={styles.TradeCardAlgorithmSection}>
                <div>
                    <label className={styles.TradeCardLabel}>
                        {"Алгоритм"}
                    </label>
                    <p className={styles.TradeCardCommonText}>
                        {trade.algorithm.name}
                    </p>
                </div>
                <p className={styles.TradeCardAlgorithmTypeText}>
                    {trade.algorithm.type}
                </p>
            </section>
        </article>
    );
}
