import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categorySlice";
import currencySlice from "./reducers/currencySlice";

export default configureStore({
    reducer: {
        categories: categorySlice,
        currencies: currencySlice,
    },
  });