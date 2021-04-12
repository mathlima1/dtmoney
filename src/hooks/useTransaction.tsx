import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface transactionsProps {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createAt: string
}

{
    //Jeito comum
    // interface TransactionInput {
    //     title: string,
    //     type: string,
    //     category: string,
    //     amount: number,
    // }

    // O Pick vai em um tipo e PEGA algumas coisas
    //type TransactionInput = Pick<transactionsProps, 'title' | 'type' | 'amount' | 'category'>
}
//Já o Omit EXCLUI algumas coisas
type TransactionInput = Omit<transactionsProps, 'id' | 'createAt'>

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionContextData {
    transactions: transactionsProps[],
    creatTransaction: (transaction: TransactionInput) => Promise<void>,
}

const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);


export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<transactionsProps[]>([])
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function creatTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', { ...transactionInput, createAt: new Date(), });
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionContext.Provider value={{ transactions, creatTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    const context = useContext(TransactionContext);

    return context;
}