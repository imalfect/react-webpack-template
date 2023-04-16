import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import '../fonts/inter-v12-latin-800.woff2';
import '../fonts/inter-v12-latin-800.woff';
import '../fonts/inter-v12-latin-regular.woff2';
import '../fonts/inter-v12-latin-regular.woff';
export const numberFormatter = new Intl.NumberFormat('en-US');
// Main thing
ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>,
);
