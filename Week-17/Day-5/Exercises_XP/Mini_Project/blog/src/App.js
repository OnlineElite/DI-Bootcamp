import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Details from './components/Details'
import './style.css'



function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
        <div className='body'>
            <Routes >
                <Route exact path = '/' element = {<Home/>} />
                <Route path = '/about' element = {<About/>} />
                <Route path='/contact' element = {<Contact/>} />
                <Route path='/post/:post_id' element = {<Details/>} />
            </Routes>
        </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
