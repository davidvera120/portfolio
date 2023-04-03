
import { DivCard2, DivPadre } from '../styles/Styles1';
import {Link} from 'react-router-dom'
import React from 'react';
import Cards from '../components/projects/Cards';
import Skills2 from '../components/skills/Skills2';
import About from '../components/about/About';
import Home2 from '../components/home/Home2';
import Footer from '../components/footer/Footer';
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, CardUser, CardPet } from '../styles/PagIntro'
import ButtonNavBar from '../components/navbar/ButtonNavBar';


export const Home = () => {

  return (
 <>
 <a name="home"  />
<Home2 />

<a name="perfil"  />
<About />

<a name="skills"  />
<Skills2 />

<a name="portfolio"  />
<Cards />

<Footer />

<ButtonNavBar />
 </>
  )
}



