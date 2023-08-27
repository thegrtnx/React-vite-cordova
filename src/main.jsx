import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css'
import '@fortawesome/fontawesome-free/css/all.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './assets/css/style.css'

axios.defaults.baseURL = 'https://api.urbanpay.io/api/';
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)