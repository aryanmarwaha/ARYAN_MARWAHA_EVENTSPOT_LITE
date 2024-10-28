import { createSlice } from "@reduxjs/toolkit";

const filterEventSlice = createSlice({
    name: "filterEvent",
    initialState: {
        value: {
            date: [],
            language: [],
            category: [],
            price: [],
        },
    },
    reducers: {
        setFilterDate: (state, action) => {
            if (!state.value.date.includes(action.payload)) {
                state.value.date.push(action.payload);
            }
        },
        removeFilterDate: (state, action) => {
            if (state.value.date.includes(action.payload)) {
                state.value.date.splice(
                    state.value.date.indexOf(action.payload),
                    1
                );
            }
        },
        resetFilterDate: (state) => {
            state.value.date.length = 0;
        },

        setFilterLanguage: (state, action) => {
            if (!state.value.language.includes(action.payload)) {
                state.value.language.push(action.payload);
            }
        },
        removeFilterLanguage: (state, action) => {
            if (state.value.language.includes(action.payload)) {
                state.value.language.splice(
                    state.value.language.indexOf(action.payload),
                    1
                );
            }
        },
        resetFilterLanguage: (state) => {
            state.value.language = [];
        },

        setFilterCategory: (state, action) => {
            if (!state.value.category.includes(action.payload)) {
                state.value.category.push(action.payload);
            }
        },
        removeFilterCategory: (state, action) => {
            if (state.value.category.includes(action.payload)) {
                state.value.category.splice(
                    state.value.category.indexOf(action.payload),
                    1
                );
            }
        },
        resetFilterCategory: (state) => {
            state.value.category = [];
        },

        setFilterPrice: (state, action) => {
            if (!state.value.price.includes(action.payload)) {
                state.value.price.push(action.payload);
            }
        },
        removeFilterPrice: (state, action) => {
            if (state.value.price.includes(action.payload)) {
                state.value.price.splice(
                    state.value.price.indexOf(action.payload),
                    1
                );
            }
        },
        resetFilterPrice: (state) => {
            state.value.price = [];
        },
    },
});

export const {
    setFilterDate,
    removeFilterDate,
    resetFilterDate,
    setFilterLanguage,
    removeFilterLanguage,
    resetFilterLanguage,
    setFilterCategory,
    removeFilterCategory,
    resetFilterCategory,
    setFilterPrice,
    removeFilterPrice,
    resetFilterPrice,
} = filterEventSlice.actions;

export const selectDateFilters = (state) => state.filterEvent.value.date;
export const selectLanguageFilters = (state) =>
    state.filterEvent.value.language;
export const selectCategoryFilters = (state) =>
    state.filterEvent.value.category;
export const selectPriceFilters = (state) => state.filterEvent.value.price;

export const selectFilter = (state) => {
    const filter = {};
    if (state.filterEvent.value.date.length > 0) {
        filter["date"] = state.filterEvent.value.date.join(",");
    }
    if (state.filterEvent.value.language.length > 0) {
        filter["language"] = state.filterEvent.value.language.join(",");
    }
    if (state.filterEvent.value.category.length > 0) {
        filter["category"] = state.filterEvent.value.category.join(",");
    }
    if (state.filterEvent.value.price.length > 0) {
        filter["price"] = state.filterEvent.value.price.join(",");
    }

    return filter;
};

export const filterEventReducer = filterEventSlice.reducer;
