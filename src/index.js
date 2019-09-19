import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoalProvider } from './context/GoalContext';

ReactDOM.render(
    <BrowserRouter>
        <GoalProvider>
            <App />
        </GoalProvider>
    </BrowserRouter>, 
    document.getElementById('root'));
