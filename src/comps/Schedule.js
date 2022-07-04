import greg from '../assets/greg.png';
import mathew from '../assets/mathew.png';
import '../css/Home.css';

function Schedule() {

    return (
      <div className="Schedule">
        <div className="sub_main_div">
        <div className="sub_main_emp_div">
          <img className="sub_main_img" src={greg}/>
          <button className="sub_main_button">SCHEDULE WITH GREG PEREZ</button>
        </div>
        <div className="vl"></div>
        <div className="sub_main_emp_div">
          <img className="sub_main_img" src={mathew}/>
          <button className="sub_main_button">SCHEDULE WITH MATHEW MARTIENZ</button>
        </div>
        </div>
      </div>
    );
  }
  
  export default Schedule;