//import logo from './logo.svg';
import './App.css';
import WeatherForecast from './components/WeatherForecast'
import WeatherForm from './components/WeatherForm'
import './weather.css'

function App() {
  return (
    <div className='body'>
      <div className="container">
        <WeatherForm/>
        <WeatherForecast/>
      </div>
    </div>
  );
}

export default App;
