import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Reset from "./Components/Reset";
import HomePage from "./Components/HomePage";

function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/homepage" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
