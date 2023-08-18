import './App.css';
import {BrowserRouter as Router,Routes ,Route } from "react-router-dom"
import { Home } from './Compontes/Home';
import { Error } from './Compontes/error';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='*'Component={Error} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
