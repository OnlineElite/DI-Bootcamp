//import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contactx from './Contactx'

function App() {
  return (
    <>
      <ul style={{ width: '20vw' ,display: 'flex', justifyContent: 'space-between'}}>
        <li> 
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About' >About</Link>
        </li>
        <li>
          <Link to='/Contact' >Contact</Link>
        </li>
      </ul>
      <hr></hr>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contactx/>} />
      </Routes>

    </>
  );
}

export default App;
