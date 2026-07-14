import { useGetTradesQuery } from "@shared/api/generatedApi";
import { useMemo } from "react";
import styles from "@shared/styles/WidgetStyle.module.css";
import { getValueColor } from "@shared/lib/GetValueColor";

export function WinRate() {
    const { data: tradeList } = useGetTradesQuery();

    const winRate = useMemo<number | null>(() => {
        if (tradeList) {
            const winTrades = tradeList.filter((trade) => trade.pnl > 0);
            return (winTrades.length / tradeList.length) * 100;
        } else return null;
    }, [tradeList]);

    const labelColor = getValueColor(winRate || 0);

    return (
        <article className={styles.article}>
            <label className={styles.label}>WinRate</label>
            <p className={`${styles.header} ${styles[labelColor]}`}>
                {winRate ? `${winRate.toFixed(2)}%` : "Сделок нет"}
            </p>
        </article>
    );
}
