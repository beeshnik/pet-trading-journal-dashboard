import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import type { TradeFilter } from "./types";

const initialState: TradeFilter = {
    algorithmId: undefined,
    instrument: undefined,
    dateFrom: undefined,
    dateTo: undefined,
};

export const filterSlice = createSlice({
    name: "tradeFilter",
    initialState,
    reducers: {
        updateFilter: (_, action: PayloadAction<TradeFilter>) => {
            return action.payload;
        },
        clearFilter: () => {
            return initialState;
        },
    },
});

export const { updateFilter, clearFilter } = filterSlice.actions;

export const useUpdateTradeFilter = () => {
    const dispatch = useDispatch();
    return (filter: TradeFilter) => dispatch(updateFilter(filter));
};

export const useClearTradeFilter = () => {
    const dispatch = useDispatch();
    return () => dispatch(clearFilter());
};

