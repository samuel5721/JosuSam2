import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './routes/Home.js';
import Roulette from './routes/programs/roulette/Roulette.js';
import RouletteSettings from './routes/programs/roulette/RouletteSettings.js';
import { Provider } from 'jotai';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path='/'  element={<Home />}></Route>
          <Route path='/program/1/'  element={<RouletteSettings />}></Route>
          <Route path='/program/1/play/'  element={<Roulette />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
