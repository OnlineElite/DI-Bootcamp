import {store} from './store'
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <Counter  count= {store.getState().count} />
  );
}

export default App;
