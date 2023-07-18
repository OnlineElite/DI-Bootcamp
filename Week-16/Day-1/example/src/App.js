import './App.css';
import Day from './Day'
import {store} from './store'


function App() {
  return (
    <div>
      <Day weekday = {store.getState().weekday}/>
    </div>
  );
}

export default App;
