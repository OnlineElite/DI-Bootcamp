import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Landing from './components/Landing'
import Dashbord from './components/Dashbord'
import UserInterface from './components/UserInterface'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing/>} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/dashbord' element={<Dashbord/>} />
          <Route path="/userInterface" element={<UserInterface/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
library.add(fab, fas, far)
