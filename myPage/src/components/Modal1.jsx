import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonIntro, ImgIntro, TextIntro, Singupfrm, Form, Label, Input1, Tech, InputContainer, ButtonIntro1, Body, CardInicio, TextArea } from '../styles/PagIntro'
import { EnergySavingsLeafRounded } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

export const Modal1 = () => {




  const [abierto, setabierto]= useState(false)

  const funcionModal = (valor) => {
   
   setabierto(valor)
   }
   const navigate = useNavigate();
const form= useRef()

   const enviar = async (e) => {
    e.preventDefault()
    emailjs.sendForm('service_kf84ws9', 'template_r2pqqna', form.current, 'SeVX_EjA0A-NXzLR1')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    MySwal.fire({
      title: <strong Style="color:black">Good job!</strong>,
      html: <i Style="color:black">Message Sent</i>,
      icon: 'success'
    })

e.target.reset()
setabierto(false)

   };

  return (
    <div>
    <button  Style="background:none; border:none;"  onClick={()=>{funcionModal(true)}}><i className='bx bx-envelope' Style="font-size:24px; color:black"></i></button>
   
    <Modal isOpen={abierto}>

    <ModalHeader>
    <div className="container d-flex" Style="text-align:center; justify-content:center;">
  
    <button onClick={()=>{funcionModal(false)}} Style="background:none; border:none;color:black"><i className='bx bx-x-circle' Style=" font-size:20px;color:black"></i></button>
   
  
    <h1 className="contact">Contact Me</h1>
  
    </div>
    </ModalHeader>
    
         <ModalBody>
    
         <Singupfrm>
      <Form ref={form} onSubmit={enviar}>
      <div className="container">
      <InputContainer className="mb-5">
      <h6 Style="margin-left:-280px; color:black">Name:</h6>
      <Input1 type="text" name="user_name"    placeholder="name" required/>
    </InputContainer>
      <InputContainer className="mb-3 mt-3">
      <h6 Style="margin-left:-280px; color:black">Email:</h6>
      <Input1 type="email" name="user_email" placeholder="youremail@gmail.com" required/>
      </InputContainer>
      </div>
      <div className="col-12 mt-5 mb-3">
      <div className="container">
            <h6 Style="color:black">Message:</h6>
            <textarea  name="message" rows="7" placeholder="  message" required/>
            </div>  
            </div>
      <ModalFooter>
      <div className="container d-flex" Style="text-align:center; justify-content:center; margin-bottom:25px">
      
      <button className="button5" type="submit"><i className='bx bx-mail-send' Style="font-size:30px"></i></button>
    
      </div>
    </ModalFooter>
      
      </Form>
      </Singupfrm>
   
         </ModalBody>

    
    
    </Modal>
    </div>
  )
}

export default Modal1

