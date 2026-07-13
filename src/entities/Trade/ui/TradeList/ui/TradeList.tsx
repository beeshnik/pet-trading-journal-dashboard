import { useGetTradesQuery } from "@shared/api/generatedApi";
import { TradeCard } from "../../TradeCard/";
import styles from "./TradeList.module.css"
import { Fragment } from "react/jsx-runtime";

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
                        // <TradeCard
                        //         key={`trade-${trade.id}`}
                        //         trade={trade}
                        //     />
                        <Fragment key={`${trade.id}-temp`}>
                            <TradeCard
                                key={`trade-${trade.id}-6`}
                                trade={trade}
                            />
                            <TradeCard
                                key={`trade-${trade.id}-1`}
                                trade={trade}
                            />
                            <TradeCard
                                key={`trade-${trade.id}-2`}
                                trade={trade}
                            />
                            <TradeCard
                                key={`trade-${trade.id}-3`}
                                trade={trade}
                            />
                            <TradeCard
                                key={`trade-${trade.id}-4`}
                                trade={trade}
                            />
                            <TradeCard
                                key={`trade-${trade.id}-5`}
                                trade={trade}
                            />
                        </Fragment>
                    ))
                ) : (
                    <p>{"Список сделок пуст"}</p>
                )}
            </div>
        </>
    );
}
