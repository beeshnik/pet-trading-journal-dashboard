import { useGetTradesQuery } from "@shared/api/generatedApi";
import { TradeCard } from "../../TradeCard/";
import styles from "./TradeList.module.css";

export function TradeList() {
    const { data: tradeList, error, isLoading, isError } = useGetTradesQuery();

    return (
        <>
            {isLoading && <p>{"Сделки загружаются..."}</p>}
            {isError && (
                <p>{`Произошла ошибка при загрузке сделок! ${error}`}</p>
            )}
            <div className={styles.TradeList}>
                {tradeList && tradeList.length > 0 ? (
                    tradeList?.map((trade) => (
                        <TradeCard key={`trade-${trade.id}`} trade={trade} />
                    ))
                ) : (
                    <p>{"Список сделок пуст"}</p>
                )}
            </div>
        </>
    );
}
