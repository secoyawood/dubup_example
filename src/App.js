import logo from './logo.png';
import main_1 from './main_1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo_div">
        <img className="logo" src={logo}/>
      </div>
      <div className="main_1_div">
        <img className="main_1" src={main_1}/>
          <div className="main_1_text_div">
            <h2 className="main_1_text">NEXT LEVEL CUTS</h2>
          </div>
      </div>
    </div>
  );
}

export default App;
