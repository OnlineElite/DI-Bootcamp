import Home from './Home'
import './App.css';
import './Snapshot.css'
import { Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Navigate to="/Mountain" />} />
        <Route path="/:category" element={<Home/>} />
      </Routes>

    </div>
  );
}

export default App;
