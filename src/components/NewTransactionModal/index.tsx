import Modal from 'react-modal';
import { useState, FormEvent } from 'react';
import { useTransaction } from '../../hooks/useTransaction';

import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import closeIcon from '../../assets/close.svg';

import { Container, TypeTransactionContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
    onCloseNewTransactionModal: () => void,
    onModalIsOpen: boolean
}
Modal.setAppElement('#root')
export function NewTransactionModal({ onCloseNewTransactionModal, onModalIsOpen }: NewTransactionModalProps) {
    const { creatTransaction } = useTransaction()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');


    async function handleNewTransaction(event: FormEvent) {
        event.preventDefault();

        await creatTransaction({
            title,
            type,
            category,
            amount,
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onCloseNewTransactionModal()
    }
    return (
        <Modal
            isOpen={onModalIsOpen}
            onRequestClose={onCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                className="react-modal-close"
                type="button"
                onClick={onCloseNewTransactionModal}
            >
                <img src={closeIcon} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    value={title}
                    onChange={(event) => { setTitle(event.target.value) }}
                    placeholder="Título"
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(event) => { setAmount(Number(event.target.value)) }}
                />

                <TypeTransactionContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeIcon} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('withDraw') }}
                        isActive={type === "withDraw"}
                        activeColor="red"
                    >
                        <img src={outcomeIcon} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TypeTransactionContainer>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => { setCategory(event.target.value) }}
                />
                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )



}