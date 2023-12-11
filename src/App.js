import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './routes/Home';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/'  element={<Home />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
