
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import App1 from './App1.jsx'
import QueApp from './QueApp.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>

        {/* <App /> */}
        {/* <App1/> */}
        <QueApp/>

    </BrowserRouter>

)
