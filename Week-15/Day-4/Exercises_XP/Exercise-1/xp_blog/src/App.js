import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import './App.css';
import './Style.css'

function HomeScreen(){

  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}

function ProfileScreen(){

  return(
    <div>
      <h1>Profile Screen</h1>
    </div>
  )
}

function ShopScreen(){

  return(
    <div>
      <h1>An error has occured</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item  " >
                <NavLink to="/" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "" }  > Home </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/profile" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "" }  > Profile </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/shop" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "" }  > Shop </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element= {<ErrorBoundary><HomeScreen/></ErrorBoundary> } />
          <Route path="/profile" element= {<ErrorBoundary><ProfileScreen/></ErrorBoundary>} />
          <Route path="/shop" element= {<ErrorBoundary><ShopScreen/></ErrorBoundary>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
