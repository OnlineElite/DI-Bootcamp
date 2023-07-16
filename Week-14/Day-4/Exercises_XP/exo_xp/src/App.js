import Car from './Components/Car'
import Garage from './Components/Garage'
import Events from './Components/Events'
import Phone from './Components/Phone'
import Color  from './Components/Color'
import './App.css';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <div>
      <Car info = {carinfo} />
      <Garage size="small" />  
      <Events/>
      <Phone/>
      <Color/>
    </div>
  );
}

export default App;
