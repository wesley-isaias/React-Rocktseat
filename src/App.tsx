import Modal from 'react-modal';
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider} from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal (){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal (){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
    <Header  onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
    <Dashboard />

    <NewTransactionModal
      isOpen = {isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}      
   />


   
    <GlobalStyle />
    </TransactionProvider>
      
   
  );
}

