import logo from '../assets/logo.png';
import main_1 from '../assets/main_1.jpg';
// import greg from './greg.png';
// import mathew from './mathew.png';
import '../css/Home.css';
import React, {useState, useEffect} from 'react';

function Home() {

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
    <div className="Home">

      {/* Header */}

      <div className="header_div" id="header">
        <img className="logo" src={logo}/>
        <div className="header_text_div">
          <h2 className="header_text">509-876-4104</h2>
          <h2 className="header_text">1617 East Alder Street <br/>
          Walla Walla, WA 99362</h2>
        </div>
      </div>

      {/* Top Main, call to action */}
      <div className="body">
      <div className="main_1_div">
        <img className="main_1" src={main_1}/>
          <div className="main_1_text_div">
            <h2 className="main_1_text">NEXT LEVEL CUTS</h2>
            
          </div>
          <div className="main_1_button_div">
            <button className="main_1_button">SCHEDULE NOW</button>
          </div>

      </div>

      {/* Sub Main */}

      {/* <div className="sub_main_div">
        <div className="sub_main_emp_div">
          <img className="sub_main_img" src={greg}/>
          <button className="sub_main_button">SCHEDULE WITH GREG PEREZ</button>
        </div>
        <div className="vl"></div>
        <div className="sub_main_emp_div">
          <img className="sub_main_img" src={mathew}/>
          <button className="sub_main_button">SCHEDULE WITH MATHEW MARTIENZ</button>
        </div>

      </div> */}

      <div className="footer">
      </div>  

    </div>
    </div>
  );
}

export default Home;
