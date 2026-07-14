import { useGetTradesQuery } from "@shared/api/generatedApi";
import { useMemo } from "react";
import styles from "@shared/styles/WidgetStyle.module.css";
import { getValueColor } from "@shared/lib/GetValueColor";

export function Pnl() {
    const { data: tradeList } = useGetTradesQuery();

    const pnl = useMemo<number | null>(() => {
        if (tradeList) {
            return tradeList.reduce((acc, trade) => (acc += trade.pnl), 0);
        } else return null;
    }, [tradeList]);

    const labelColor = getValueColor(pnl || 0);

    return (
        <article className={styles.article}>
            <label className={styles.label}>P&L</label>
            <p className={`${styles.header} ${styles[labelColor]}`}>
                {pnl ? `${pnl.toLocaleString()}$` : "Сделок нет"}
            </p>
        </article>
    );
    
}
