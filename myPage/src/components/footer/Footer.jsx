import React from 'react';
import './footer.css';
const date= new Date();
const year=date.getFullYear();


export const Footer = () => {
 
  return (
    <div>
    <footer>
    <nav className="col-12">
 <div className="general1">
 <img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1672612934/portafolio/logogris_z3eab5.png" Style="height:70px; margin-top:5px" alt="logo"/>
<h6 className="footer-text">Site by David Vera</h6>
<h6 className="footer-text">&copy;{year} All Rights Reserved</h6>
 </div>
 </nav>
    </footer>
    </div>
  )
}

export default Footer