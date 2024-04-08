import ReactDOM from 'react-dom/client'
import App from './layout/App/App.tsx'
import './index.css'
import './normalize.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
)
