import { useGetTradesQuery } from "@shared/api/generatedApi";
import { TradeCard } from "../../TradeCard/";
import styles from "./TradeList.module.css";
import { useAppSelector } from "@shared/hooks";
import { useMemo } from "react";

export function TradeList() {
    const { data: tradeList, error, isLoading, isError } = useGetTradesQuery();
    const tradeFilter = useAppSelector((state) => state.tradeFilter);

    const filteredTrades = useMemo(() => {
        let trades = tradeList;
        if (tradeFilter) {
            trades = tradeList?.filter((trade) => {
                const conditions: boolean[] = [];

                if (tradeFilter.algorithmId) {
                    conditions.push(
                        tradeFilter.algorithmId === trade.algorithm.id,
                    );
                }

                if (tradeFilter.instrument) {
                    conditions.push(
                        tradeFilter.instrument === trade.instrument,
                    );
                }

                if (tradeFilter.dateFrom) {
                    conditions.push(
                        new Date(tradeFilter.dateFrom) <=
                            new Date(trade.openDate),
                    );
                }

                if (tradeFilter.dateTo) {
                    conditions.push(
                        new Date(tradeFilter.dateTo) >=
                            new Date(trade.openDate),
                    );
                }

                return conditions.every((condition) => condition === true);
            });
        }
        return trades;
    }, [tradeList, tradeFilter]);

    return (
        <>
            {isLoading && <p>{"Сделки загружаются..."}</p>}
            {isError && (
                <p>{`Произошла ошибка при загрузке сделок! ${error}`}</p>
            )}
            <div className={styles.TradeList}>
                {!isLoading &&
                !isError &&
                filteredTrades &&
                filteredTrades.length > 0
                    ? filteredTrades?.map((trade) => (
                          <TradeCard key={`trade-${trade.id}`} trade={trade} />
                      ))
                    : !isLoading && !isError && <p>{"Список сделок пуст"}</p>}
            </div>
        </>
    );
}
