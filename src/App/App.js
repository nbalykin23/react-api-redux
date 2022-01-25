import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header/Header'
import MainCat from '../components/MainCat/MainCat'
// import { Button } from 'react-bootstrap'
import Home from '../components/Home/Home'
import {Route, Routes} from 'react-router'
import MainDog from '../components/MainDog/MainDog'
import Favorite from '../components/Favorite/Favorite'


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/cat" element={<MainCat/>}/>
                <Route path="/dog" element={<MainDog/>}/>
                <Route path="/favorite" element={<Favorite/>}/>

            </Routes>
        </div>

    )
}

export default App
