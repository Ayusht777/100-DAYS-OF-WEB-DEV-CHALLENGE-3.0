import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Compontes/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/services" />
        <Route path="/contact" />
      </Routes>
    </Router>
  );
}

export default App;
