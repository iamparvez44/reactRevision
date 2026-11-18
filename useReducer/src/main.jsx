
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MyCartContextProvider } from './utils/cartContext.jsx'

createRoot(document.getElementById('root')).render(

    <MyCartContextProvider>
        <App />
    </MyCartContextProvider>

)
