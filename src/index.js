import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './context/ModalContext';
import { GameState } from './context/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ModalState>
      <GameState>
        <App />
      </GameState>
    </ModalState>
);

