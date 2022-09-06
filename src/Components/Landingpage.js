import React from 'react'
import  Navbar  from './Navbar';
import Body from "./Body"
import Herosection from './Herosection';
import Footer from './Footer';

function Landingpage() {
  return (<>
 
   <Navbar/>
  
    
      <Herosection/>
      <Body/>
     
      <Footer/>
  
    </>)
}

export default Landingpage
