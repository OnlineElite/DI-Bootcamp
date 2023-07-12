import Calcu from './Calcu'
import './App.css';
import ErrorBoundary from './ErrorBoundary'
function App() {
  return (
    <ErrorBoundary>
      <Calcu classlist = 'varname'/>
    </ErrorBoundary>
     
  );
}

export default App;
