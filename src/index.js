import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAZy994UakqNMEDvxDCVXMA1JkJw-__ZqE",
  authDomain: "bcecommerce-62558.firebaseapp.com",
  projectId: "bcecommerce-62558",
  storageBucket: "bcecommerce-62558.appspot.com",
  messagingSenderId: "769536910192",
  appId: "1:769536910192:web:f72fdc02958ac40a8ee5b5"
};
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
