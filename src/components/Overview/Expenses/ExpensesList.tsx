import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { filterTransactionsByDate,sortTransactions } from './helpers';
import { prepareData } from '../../../util/prepare-data';
import { Transaction } from '../../../types/transaction-type';
import Expense from './Expense';
import classes from './ExpensesList.module.scss';
import { fetchTransactions } from '../../../store/async/fetch-transactions';
import { filterTransactions } from '../../../util/filter-transactions';
import { userActions } from '../../../store/userSlice';

const ExpensesList = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const activePage = useAppSelector((state) => state.user.activePage);
    const id = useAppSelector((state) => state.user.userId);
    const activeTransactionType = useAppSelector((state) => state.transactions.activeTransactionType);
    const fetchedTransactions = useAppSelector((state) => state.transactions.allTransactions);
    const activeYear = useAppSelector((state) => state.transactions.activeYear);
    
    const transformedTransactions = prepareData(fetchedTransactions);
    const transactionsList =  location.pathname === '/overview' ? transformedTransactions : filterTransactions(transformedTransactions, activeTransactionType);
    const filteredByDate = filterTransactionsByDate(transactionsList,activeYear);
    const sorted = sortTransactions(filteredByDate);
    let avaiableTransactions = [];
    
    location.pathname === '/overview' ? avaiableTransactions = sortTransactions(transformedTransactions) : avaiableTransactions = sorted;

    let shownTransactions = avaiableTransactions.slice(0 + activePage * 6, 6 + 6 * activePage);

    const handleLoadingMore = () => {
        dispatch(userActions.setActivePage(activePage + 1));
    }

    useEffect(() => {
        dispatch(fetchTransactions(id));
    },[dispatch, id])

    useEffect(() => {
        dispatch(userActions.setActivePage(0));
    }, [location.pathname, dispatch])
    
    return(   
        <section className={location.pathname !== '/transactions' ? `${classes['expenses-list']} ${classes['expenses-list--margin']}` : `${classes['expenses-list']}`}>
            <ul>
                {shownTransactions.map((exp: Transaction) => <Expense key={Math.random()} category={exp.category} note={exp.note} type={exp.type} amount={exp.value} date={exp.date} />)}
            </ul>
            {(avaiableTransactions.length / (activePage + 1)) > 6 && <button type='button' onClick={handleLoadingMore} className={classes['expenses-list__btn']}>
                Load Older
            </button>}
        </section> 
    )
}

export default ExpensesList;