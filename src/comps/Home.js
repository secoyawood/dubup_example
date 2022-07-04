import logo from '../assets/logo.png';
import main_1 from '../assets/main_1.jpg';
// import greg from './greg.png';
// import mathew from './mathew.png';

import grid_1 from '../assets/grid_1.jpg';
import grid_2 from '../assets/grid_2.jpg';
import grid_3 from '../assets/grid_3.jpg';
import grid_4 from '../assets/grid_4.jpg';
import grid_5 from '../assets/grid_5.jpg';
import grid_6 from '../assets/grid_6.jpg';

import wood_back from '../assets/wood_back.jpg';

import '../css/Home.css';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


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
        <Link id="current" className="header_link" to="/">HOME</Link>
        <Link className="header_link" to="/schedule">SCHEDULE</Link>
        <Link className="header_link" to="/about">ABOUT</Link>
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

      <div className="sub_main_grid_div">
        <h2 className="grid_text">HAIR DESIGNS, MODERN TRENDING HAIRSTYLES, FADES, <br/> AND MUCH MORE.</h2>
        <div className="grid">
          <img src={grid_1} className="grid_img"/>
          <img src={grid_2} className="grid_img"/>
          <img src={grid_3} className="grid_img"/>
          <img src={grid_4} className="grid_img"/>
          <img src={grid_5} className="grid_img"/>
          <img src={grid_6} className="grid_img"/>
        </div>
      </div>

      <div className="sub_main_buttom">
        <img className="wood_background" src={wood_back}/>
      </div>

      <div className="footer">
      </div>  

    </div>
    </div>
  );
}

export default Home;
