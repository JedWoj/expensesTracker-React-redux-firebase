import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTransactions = createAsyncThunk('user/fetchExpenses', async (id: string) => {
    const response = await fetch(`https://expensetracker-2f166-default-rtdb.europe-west1.firebasedatabase.app/:expenseTracker/${id}.json`);
    const expenses = await response.json();
    let arr = [];
    for (const key in expenses) {
        arr.push(expenses[key])
    }
    const ready = [].concat.apply([],arr);
    return {name: ready};
});