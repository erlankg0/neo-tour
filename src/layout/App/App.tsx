import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "../Main/mainPage.tsx";
import Detail from "../Detail/Detail.tsx";
const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/detail/:id'} element={<Detail/>}/>
            </Routes>
        </div>
    )
}

export default App
