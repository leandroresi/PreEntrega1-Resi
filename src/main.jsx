import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjdRv--D7ljTd8xWroDVrIu8AgwFRmFuI",
  authDomain: "walden-5e5bb.firebaseapp.com",
  projectId: "walden-5e5bb",
  storageBucket: "walden-5e5bb.appspot.com",
  messagingSenderId: "171752940154",
  appId: "1:171752940154:web:93f574160d06bfd497d1c3"
};

// Import firebase
const app = initializeApp(firebaseConfig);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
