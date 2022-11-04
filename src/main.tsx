import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from 'react-router-dom'
import {Footer} from './components/Footer'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
