import logo from "./logo.svg";
import Nav from "./Components/Nav";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          App
          <Nav />
          <Home />
          <About />
          <Routes>
            <Route path="/">
              <Route path="/about">
                <Route path="users"></Route>
              </Route>
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
