
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { listaProjects } from '../../Redux/Actions/readProjects';
import { ButtonIntro, ImgIntro, TextIntro, Singupfrm, Form, Label, Input1, Tech, InputContainer, ButtonIntro1, Body, CardInicio, TextArea } from '../../styles/PagIntro'
import "./projects.css";
import {FaPlay} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";

export const Cards = () => {

    const dispatch = useDispatch();

    const {Pro}= useSelector(state => state.read);
    const [filtrado, setFiltrado]=useState([])
    const [filtrado2, setFiltrado2]=useState([])
    const [filtrado3, setFiltrado3]=useState([])
    const [abierto, setabierto]= useState(false)

    const funcionModal = (valor, id2) => {
        const filtrado1 = Pro.filter((elemento) =>{
        
            return elemento.id===id2 
        });
    setFiltrado(filtrado1)
    setabierto(valor)
    setFiltrado2(filtrado1[0].fotos)
    setFiltrado3(filtrado1[0].tech)
    }
console.log(filtrado2)
console.log(filtrado)


function siguiente() {
    let sliderSectionLast = document.querySelectorAll(".slider__section")[0];
    const slider = document.querySelector("#slider");
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionLast);
        slider.style.marginLeft = "0";
    }, 500);
}

 function anterior() {
    let sliderSection = document.querySelectorAll(".slider__section");
    const slider = document.querySelector("#slider");
    let sliderSectionFirst = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
        slider.style.marginLeft = "0";
    }, 500);
}

    useEffect(() => {
      
        dispatch( listaProjects())
        
        },[dispatch])
  return (
 <div className="container-fluid fondo1">
 <div className="row">
    <div className="col-12 mt-5">
    <div className="d-flex general1 mt-4">
    <div className="position-relative d-flex align-items-center justify-content-center">
    <h1 className="text-uppercase" Style="-webkit-text-stroke: 1.5px #dee2e6;font-size:75px; color:transparent">Gallery</h1>
    <h1 className="position-absolute text-uppercase" Style="font-size:40px; color:rgba(1,208,212,1)">My Portfolio</h1>
   </div>
    </div>
    </div>
   
    <div className="col-12">
    <div className="d-flex general1" Style="gap:20px; flex-wrap:wrap;">
      
  {
    Pro?.map(elemento =>(
    <div className="card6">
    <img src={elemento.img} alt="" Style="height:200px; width:230px; border-radius:10px; margin-top:12px"/>
    <h3 Style="margin-top:10px;font-size:20px; height:55px; color:white">{elemento.title}</h3>
    <button className="BTN btn" Style="color:white; background:#ababab ;border: 1px solid rgba(1,208,212,1); width:230px; height:35px"  onClick={()=>{funcionModal(true, (elemento.id))}}>View More</button>
    </div>
    ))
}
   </div>
   </div>


   <Modal isOpen={abierto}>

   <ModalHeader>
   <button onClick={()=>{funcionModal(false)}} Style="background:none; border:none;color:black"><i className='bx bx-x-circle' Style=" font-size:20px;color:black"></i></button>
   </ModalHeader>
   
        <ModalBody>
   
  <div className="col-12">
  <div className="container d-flex" Style="justify-content:center; align-items:center">
    <div className="slider__contenedor">
    <div classname="slider" id="slider">
    {
        filtrado2?.map(elemen=>(
    <div className="slider__section">
    <button  onClick={()=>{anterior()}} Style="border:none;background:none;" ><i Style="color:black" className='bx bxs-chevron-left'></i></button>
 <img src={elemen}  className="img-slider" alt="img"/>

 <button onClick={()=>{siguiente()}} Style="border:none;background:none;" ><i Style="color:black" className='bx bxs-chevron-right'></i></button>
 
 </div>
        ))}
 </div>              
 </div>
 </div>
 </div>
  
   {
    filtrado?.map(element=>(
   <div>
   <div className="col-12">
   <div className="container d-flex" Style="justify-content:center;align-items:center">
   <center Style="color:black; font-size:26px;">{element.title}</center>
   </div>
   </div>

   <div className="col-12">
   <h4 Style="color:black">Description:</h4>
   <div className="container d-flex" Style="justify-content:center; text-align:justify;">
   <h6 Style="color:black">{element.description}</h6>
   </div>
   </div>
   </div>
    ))
}


<div className="col-12 mt-2 mb-1">
<h4 Style="color:black">Technologys:</h4>
<div className="container d-flex" Style="flex-wrap:wrap; gap:15px;">
{
    filtrado3?.map(element=>(
   <Tech><center Style="color:black; margin-top:1px;">{element}</center></Tech>
    ))
}
</div>
</div>

</ModalBody>

   <ModalFooter>

   {
    filtrado?.map(element=>(
   <div className="col-12">
   <div className="container d-flex" Style="justify-content:center;align-items:center; gap:50px">
  <a href={element.url} className="buttons-a" target="_blank" rel="noreferrer"><FaPlay size={15}className="icons-buttons"/>Live Demo</a>
  <a href={element.GitHub} className="buttons-a" target="_blank" rel="noreferrer"><AiFillGithub size={22} className="icons-buttons"/>Repository</a>
   </div>
   </div>
    ))
}
   </ModalFooter>
   
       
   
   
   </Modal>
   </div>
</div>
   

 
  )
}

export default Cards