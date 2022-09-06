import React from 'react';
import {Route ,Routes} from "react-router-dom"
import Landingpage from './Landingpage';
 
function App() {
  return (<>
  <Routes>
    <Route exact path="/" element={<Landingpage/>}/>
   
  </Routes>
  
  </>
  
  )
}

export default App
