import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from '../src/pages/routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


reportWebVitals();
