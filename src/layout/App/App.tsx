import './App.css'
import {Route, Routes} from "react-router-dom";
import Index from "./../Index/Index.tsx";
import Detail from "../Detail/Detail.tsx";
const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'/detail/:id'} element={<Detail/>}/>
            </Routes>
        </div>
    )
}

export default App
