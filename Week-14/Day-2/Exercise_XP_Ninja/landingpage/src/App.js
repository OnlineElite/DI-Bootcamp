import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Contact/>
    </div>
  );
}

export default App;
library.add(fab, fas, far)