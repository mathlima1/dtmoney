import { useTransaction } from "../../hooks/useTransaction";

import IncomeImg from "../../assets/income.svg"
import OutcomeImg from "../../assets/outcome.svg"
import TotalImg from "../../assets/total.svg"

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransaction();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount
        } else {
            acc.withDraw += transaction.amount;
            acc.total -= transaction.amount
        }
        return acc;
    }, {
        deposit: 0,
        withDraw: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutcomeImg} alt="Entradas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withDraw)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}