import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { immutableTransaction } from '../types/transaction-type';

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
    allTransactions: [{category: 'food', value: 45, type: '+', date:'2021-12-12'},{category: 'shopping', value: 24, type: '-', date:'2021-12-12'},{category: 'food', value: 45, type: '-', date:'2021-10-12'},{category: 'food', value: 45, type: '+', date:'2021-09-12'},{category: 'food', value: 45, type: '-', date:'2021-01-12', note: 'Rent for apartment'},{category: 'food', value: 45, type: '-', date:'2022-02-12', note: 'Rent for apartment'},{category: 'food', value: 45, type: '-', date:'2022-04-12'},{category: 'food', value: 45, type: '-', date:'2020-04-11'},{category: 'food', value: 45, type: '-', date:'2020-07-29'},{category: 'food', value: 45, type: '+', date:'2022-12-12'},{category: 'food', value: 45, type: '+', date:'2022-02-12'},{category: 'food', value: 45, type: '+', date:'2022-05-12'},{category: 'food', value: 45, type: '+', date:'2020-05-12'},{category: 'food', value: 85, type: '+', date:'2020-06-12'}],

    expensesTransactions: [{category: 'shopping', value: 24, type: '-', date:'2021-12-12'},{category: 'food', value: 45, type: '-', date:'2021-10-12'},{category: 'food', value: 45, type: '-', date:'2021-01-12', note: 'Rent for apartment'},{category: 'food', value: 45, type: '-', date:'2022-02-12', note: 'Rent for apartment'},{category: 'food', value: 45, type: '-', date:'2022-04-12'},{category: 'food', value: 45, type: '-', date:'2020-04-11'},{category: 'food', value: 45, type: '-', date:'2020-07-29'}],

    incomeTransactions: [{category: 'food', value: 45, type: '+', date:'2021-12-12'},{category: 'food', value: 45, type: '+', date:'2021-09-12'},{category: 'food', value: 45, type: '+', date:'2022-12-12'},{category: 'food', value: 45, type: '+', date:'2022-02-12'},{category: 'food', value: 45, type: '+', date:'2022-05-12'},{category: 'food', value: 45, type: '+', date:'2020-05-12'},{category: 'food', value: 85, type: '+', date:'2020-06-12'}],

    activeTransactions: [{category: 'food', value: 45, type: '+', date:'2021-12-12'},{category: 'food', value: 45, type: '+', date:'2021-09-12'},{category: 'food', value: 45, type: '+', date:'2022-12-12'},{category: 'food', value: 45, type: '+', date:'2022-02-12'},{category: 'food', value: 45, type: '+', date:'2022-05-12'},{category: 'food', value: 45, type: '+', date:'2020-05-12'},{category: 'food', value: 85, type: '+', date:'2020-06-12'}],

    activeTransactionType: '+',
    
    activeYear: '2022',
    },
    reducers: {
        addTransaction(state, action: PayloadAction<immutableTransaction>) {
            state.allTransactions.push(action.payload);
            action.payload.type === '+' ? state.incomeTransactions.push(action.payload) : state.expensesTransactions.push(action.payload);
        },
        setActiveTransactions(state, action: PayloadAction<string>) {
            if (action.payload === '+') {
                state.activeTransactions = state.incomeTransactions;
                state.activeTransactionType = '+';
            } else {
                state.activeTransactions = state.expensesTransactions;
                state.activeTransactionType = '-';
            }
        },
        setActiveYear(state, action: PayloadAction<string>) {
            state.activeYear = action.payload;
        }
    }
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice;