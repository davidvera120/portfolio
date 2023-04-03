import React from 'react'
import { ButtonIntro1, TextIntro, Singupfrm, Label, Input1, InputContainer, CardUser, CardPet } from '../../styles/PagIntro'
import {TbFileDownload} from "react-icons/tb"
import {Badge, Button, Card, Navbar, Nav, Table, Container, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import './about.css';

const About = () => {


 

  return (

    <div className="" Style="background:#151418; padding-bottom:50px; padding-top:60px; margin-top:-5px;" >
    <div className="row">
    <div className="col-12 mt-4">
    <div className="position-relative d-flex align-items-center justify-content-center">
    <h1 className="text-uppercase" Style="-webkit-text-stroke: 1px #dee2e6;font-size:100px; color:transparent">About</h1>
    <h1 className="position-absolute text-uppercase" Style="font-size:40px; color:rgba(1,208,212,1)">About Me</h1>
   
    
    </div>
    </div>
    </div>
   
   
    

    <div className="col-12">
    <div className="d-flex general1" Style="gap:20px; flex-wrap:wrap;margin:0 auto;width:70%">

<img src="https://res.cloudinary.com/doshr4fpd/image/upload/v1675386837/foto_cv_sin_fondo_wbzsgs.png" className="img-cv" alt="logo"/>

<div className="container-text1">
<p className="text1">I am a web developer passionate about creating high-quality, optimized, scalable applications and websites. My main experience is in the development of web applications and websites using modern technologies.
Continuously learning and acquiring new skills in response to current and future demands and technological trends in the field of web application design and development in general.
I’m always looking for new challenges and opportunities to grow as a developer. If you’re looking for someone passionate, committed, and with technical skills, I’m sure I can be a great addition to your team.</p>  
<a className="BTN btn mt-5" href="../CVdavid.vera.pdf" download Style="color:white; background:#ababab ;border: 1px solid rgba(1,208,212,1); width:230px; height:35px">Download CV<i className='bx bx-download'></i></a>
</div>  
  </div>
  </div>

  
    </div>
  )
}

export default About