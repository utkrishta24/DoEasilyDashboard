import React from "react";
import { FaHome, FaMinusSquare } from 'react-icons/fa'
import { Link,BrowserRouter } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-master">
      <div className="menu-sidebar">
        <div className="sidebar" />
      </div>
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar-child" />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Link to="/"><div className="karigar">Karigar</div></Link><br/>
        <Link to="/"><div className="bullion">Bullion</div></Link><br/>
        <Link to="/"><div className="supplier">Supplier</div></Link><br/>
        <Link to="/"><div className="customer">Customer</div></Link><br/>
        </BrowserRouter>
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <img
          className="icon-minus-rectangle"
          alt=""
          src="/-icon-minus-rectangle.svg"
        />
        <div className="parties"><FaHome/> Parties <FaMinusSquare/></div>
      </div>
      <div className="doeasily-logo">
        <div className="doeasily">
          <span>Do</span>
          <span className="easily">easily</span>
        </div>
        <div className="business-made-easy">Business Made Easy</div>
      </div>
    </div>
  );
}

export default SideBar;