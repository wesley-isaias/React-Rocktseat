import Modal from 'react-modal';
import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal (){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal (){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
    <Header  onOpenNewTransactionModal = {handleOpenNewTransactionModal} />
    <Dashboard />

          <Modal
          isOpen= {isNewTransactionModalOpen} 
          onRequestClose ={handleCloseNewTransactionModal}
          >
            <h2>Cadastrar Transação</h2>

          
          </Modal>
   
    <GlobalStyle />
    </>
      
   
  );
}

