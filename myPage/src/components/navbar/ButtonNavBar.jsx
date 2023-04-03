import React from 'react';
import {Link} from 'react-router-dom';
import Modal1 from '../Modal1';
import './nav.css';
import {GiSkills} from "react-icons/gi";
import  {BiHomeAlt,BiBriefcaseAlt,BiUserCircle} from "react-icons/bi";


export const ButtonNavBar = () => {
  return (
  
    <div className="nav1 fixed-bottom">
        <nav className="navbar-custom">
            <ul className="navbar-nav-custom mt-2">
                <li className="nav-item">
                <a href="#home"><BiHomeAlt className="icons1"/></a>  
                </li>
                <li className="nav-item">
                <a href="#perfil"><BiUserCircle className="icons1"/></a>
                </li>
                <li className="nav-item">
                <a href="#skills"><GiSkills className="icons1"/></a>
                </li>
                <li className="nav-item">
                <a href="#portfolio"><BiBriefcaseAlt className="icons1"/></a>  
                </li>
                <li className="nav-item">
                <Modal1 /> 
                </li>
            </ul>
        </nav> 
    </div>
    
  )
}
export default ButtonNavBar;