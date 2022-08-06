import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currencies: null,
    },
    reducers: {
        setCurrencies: (state, action) => {
            state.currencies = action.payload;
        },
    },
});

export const { setCurrencies } = currencySlice.actions;

export default currencySlice.reducer;