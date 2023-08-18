import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import './App.css';

function App() {
  return (
    <div className="cont">
      <h3>Example1 Component</h3>
      <div className='division'>
        <Example1/>
      </div>

      <h3>Example2 Component</h3>
      <div className='division'>
        <Example2/>
      </div>

      <h3>Example3 Component</h3>
      <div className='division'>
        <Example3/>
      </div>
      
    </div>
  );
}

export default App;
