import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

type TradeFilter = {
    algorithmId: null | string[];
    instrument: null | string[];
    dateFrom: null | Date | string;
    dateTo: null | Date | string;
};

const initialState: TradeFilter = {
    algorithmId: null,
    instrument: null,
    dateFrom: null,
    dateTo: null,
};

export const filterSlice = createSlice({
    name: "tradeFilter",
    initialState,
    reducers: {
        updateFilter: (state, action: PayloadAction<TradeFilter>) => {
            state = action.payload;
        },
        clearFilter: (state) => {
            state = initialState;
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