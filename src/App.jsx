import { Button } from '@mui/material'
import './App.css'
import { Dvr, Home } from '@mui/icons-material'
import {Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Register from './pages/register'
import Navbar from './pages/component/Navbar'
import HomePage from './pages/Home'
import Btech from './pages/btech'
import Bvoc from "./pages/bvoc"
import Bsc from "./pages/bsc"

function App() {

  return (
    
   <div>
    <Navbar/>
     <div className='mt-[8dvh]'>
     <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/btech" element={<Btech/>}/>
        <Route path="/bvoc" element={<Bvoc/>}/>
        <Route path="/bsc" element={<Bsc/>}/>
       </Routes>

     </div>
     
  
        
      
   </div>
       
   
  )
}

export default App
