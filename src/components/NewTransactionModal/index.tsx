import Modal from 'react-modal';
import { Container, TypeTransactionContainer } from './styles'
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import closeIcon from '../../assets/close.svg';

interface NewTransactionModalProps {
    onCloseNewTransactionModal: () => void,
    onModalIsOpen: boolean
}
Modal.setAppElement('#root')
export function NewTransactionModal({ onCloseNewTransactionModal, onModalIsOpen }: NewTransactionModalProps) {


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
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />

                <TypeTransactionContainer>
                    <button
                        type="button"
                    >
                        <img src={incomeIcon} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button
                        type="button"
                    >
                        <img src={outcomeIcon} alt="Saída" />
                        <span>Saída</span>
                    </button>

                </TypeTransactionContainer>

                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}