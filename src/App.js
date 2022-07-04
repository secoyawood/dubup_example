import { Routes as Router, Route, Link } from "react-router-dom";
import Home from './comps/Home.js'
import Schedule from './comps/Schedule.js'

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
      </Router>
    </div>
  );
}

export default App;
