import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsopen] = useState(false);
  const openModal = () => {
    setIsopen(true);
  };

  const closeModal = () => {
    setIsopen(false);
  };
  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2>Modal Data</h2>
          <p>This is the content of the modal.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
