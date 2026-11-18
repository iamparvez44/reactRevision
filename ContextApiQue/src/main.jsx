
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserInpContextProvider } from './Utils/TaskContext.jsx'

createRoot(document.getElementById('root')).render(

    <UserInpContextProvider>
        <App />
    </UserInpContextProvider>

)
