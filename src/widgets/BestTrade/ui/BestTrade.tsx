import { TradeCard } from "@entities/Trade";
import { useGetTradesQuery, type Trade } from "@shared/api/generatedApi";
import { useMemo } from "react";
import styles from "@shared/styles/WidgetStyle.module.css";

export function BestTrade() {
    const { data: tradeList } = useGetTradesQuery();

    const bestTrade = useMemo<Trade | null>(() => {
        if (tradeList) {
            const sortedTrades = tradeList.toSorted(
                (prevTrade, trade) => trade.pnl - prevTrade.pnl,
            );
            return sortedTrades[0];
        } else return null;
    }, [tradeList]);

    return (
        <article>
            <label className={styles.label}>Лучшая сделка</label>
            {bestTrade ? <TradeCard trade={bestTrade} /> : "Сделок нет"}
        </article>
    );
}
