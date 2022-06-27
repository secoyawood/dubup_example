import logo from './logo.png';
import main_1 from './main_1.jpg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  useEffect(() => {
    window.onscroll = function() {myFunction()};

    let header = document.getElementById("header");
    let sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
      } else {
    header.classList.remove("sticky");
    }
}
  })

  return (
    <div className="App">
      <div className="header_div" id="header">
        <img className="logo" src={logo}/>
        <div className="header_text_div">
          <h2 className="header_text">509-876-4104</h2>
          <h2 className="header_text">1617 East Alder Street <br/>
          Walla Walla, WA 99362</h2>
        </div>
      </div>

      <div className="body">
      <div className="main_1_div">
        <img className="main_1" src={main_1}/>
          <div className="main_1_text_div">
            <h2 className="main_1_text">NEXT LEVEL CUTS</h2>
          </div>
      </div>

      <div>
        <div>
          <h3>Greg Perez</h3>
        </div>
        <div>
          <h3>Mathew Martinez</h3>
        </div>

      </div>

    </div>
    </div>
  );
}

export default App;
