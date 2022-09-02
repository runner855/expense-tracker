import React from 'react';
import ReactDOM from 'react-dom/client';
import expenses from './data/expenses.json';
import './styles/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App expenses={expenses.expense} location={expenses.location} />
  </React.StrictMode>
);

