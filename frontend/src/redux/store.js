import { configureStore } from "@reduxjs/toolkit";
import { filterEventReducer } from "./slices/filterEvent.slice";

export const store = configureStore({
    reducer: {
        filterEvent: filterEventReducer,
    },
});