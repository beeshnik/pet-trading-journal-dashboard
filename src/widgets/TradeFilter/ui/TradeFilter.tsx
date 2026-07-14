import { AlgorithmSelect } from "@entities/Algorithm";
import { InstrumentSelect } from "@entities/Instrument";
import {
    useGetAlgorithmsQuery,
    useGetTradesQuery,
} from "@shared/api/generatedApi";
import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

import styles from "./TradeFilter.module.css";
import { DateFilter } from "./DateFilter";
import { useAppSelector } from "@shared/hooks";
import {
    updateFilter,
    useClearTradeFilter,
    useUpdateTradeFilter,
} from "../model/filterSlice";
import type { TradeFilterType } from "..";

export function TradeFilter() {
    const updateTradeFilter = useUpdateTradeFilter();
    const resetTradeFilter = useClearTradeFilter();
    const tradeFilter = useAppSelector((state) => state.tradeFilter);

    const methods = useForm<TradeFilterType>({
        defaultValues: {
            instrument: tradeFilter.instrument,
            algorithmId: tradeFilter.algorithmId,
            dateFrom: tradeFilter.dateFrom,
            dateTo: tradeFilter.dateTo,
        },
    });

    const { data: tradeList } = useGetTradesQuery();

    const { data: algorithmList } = useGetAlgorithmsQuery();

    const tradeInstruments = useMemo<string[]>(() => {
        const uniqueInstruments = new Set<string>();
        tradeList?.forEach((trade) => uniqueInstruments.add(trade.instrument));
        return Array.from(uniqueInstruments.keys());
    }, [tradeList]);

    const formSubmit = (form: TradeFilterType) => {
        updateFilter(form);
        updateTradeFilter(form);
    };

    const formReset = () => {
        resetTradeFilter();
    };

    useEffect(() => {
        const subscription = methods.watch(() => {
            methods.handleSubmit(formSubmit)();
        });

        return () => subscription.unsubscribe();
    }, [methods.watch, methods.handleSubmit]);

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(formSubmit)}
                onReset={formReset}
                // name="tradeFilter"
                className={styles.form}
            >
                <InstrumentSelect instrumentList={tradeInstruments} />
                <AlgorithmSelect algorithmList={algorithmList || []} />
                <DateFilter fieldName="dateFrom" fieldLabel={"Сделки от"} />
                <DateFilter fieldName="dateTo" fieldLabel={"Сделки до"} />
                <button
                    type="reset"
                    onClick={() => {
                        methods.reset();
                    }}
                >
                    Сбросить
                </button>
            </form>
        </FormProvider>
    );
}
