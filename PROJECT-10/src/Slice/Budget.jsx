/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { Money } from "./Expence";

export const Budget = createSlice({
    name: "Budget",
    initialState: {
        count: 0, 
    },
    reducers: {
        BudgetAdd(state, action) {
            state.count += Number(action.payload) 
        },
    },
    extraReducers: (builder) => {
        builder.addCase(Money, (state, action) => {
            state.count -= Number(action.payload.debitAmount) 
        })
    }
})

export const { BudgetAdd } = Budget.actions
export default Budget.reducer
