import React from 'react'
import "./home2.css"
import {Badge, Button, Card, Navbar, Nav, Table, Container, Row, Col, Form, OverlayTrigger, Tooltip} from "react-bootstrap";




const Home2 = () => {
  return (
  
    <div className="fondoGradiente">
   <div className="row">
    <div className="col-12 mt-3">
    <img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1672612945/portafolio/logonegro_bdrljo.png" Style="height:60px;" alt="logo"/> 
    </div>
  </div>
   
    <div className="col-12 title-home1" Style="margin-top:200px">
    <div className="title-home">
    <h1>Hi!, Im </h1><h1 className="text-uppercase" Style="-webkit-text-stroke: 1.5px rgba(1,208,212,1);color:transparent; margin-left:10px; font-size:33px"> David vera</h1>
    </div>
    <h1>Telecommunication Engineer</h1>
    <h1 className="typing-demo">
    & Web Developer.
   </h1>
   </div> 
   <div className="col-12 title-home1">
    <div className="d-flex mt-4" Style="justify-content: center;align-items:center; gap:40px;"> 
    <a href="https://www.linkedin.com/in/david-vera-osorio/" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin-square icon1' Style="font-size:35px;"></i></a>
    <a href="https://github.com/davidvera120" target="_blank"><i className='bx bxl-github icon3' Style="font-size:35px;"></i></a>
    <a href="https://walink.co/07af13" target="_blank"><i className='bx bxl-whatsapp icon2' Style="font-size:35px;"></i></a>
     </div>
</div>
 
<div className="d-flex w-100 mt-4" Style="justify-content: center;align-items:center">
<div className="scrolldown" Style="rgba(1,208,212,1)">
<div className="chevrons">
    <div className="chevrondown"></div>
    <div className="chevrondown"></div>
</div>
</div>
</div>
   
   
   

   
    </div>
   
   
  )
}

export default Home2
