import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './style/global';
import { TransactionProvider } from '../src/hooks/useTransaction';



export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
        onModalIsOpen={isNewTransactionModalOpen}
      />

      <Dashboard />
    </TransactionProvider>
  );
}

