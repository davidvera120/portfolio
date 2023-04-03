import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {Home} from '../pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import { ViewAgendaTwoTone } from '@mui/icons-material';
import { IconContext } from 'react-icons';
import '../Global.css'


 export const AppRoutes =() => {


        return (
         
        
                <BrowserRouter>
                    <Routes>
                  
               
                    <Route path="/"   element={<Home />} />
    
                   
                  
                    </Routes>
                </BrowserRouter>
       
          
        );
    }

export default AppRoutes;