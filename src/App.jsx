import { Button } from '@mui/material'
import './App.css'
import { Dvr } from '@mui/icons-material'
import {Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Register from './pages/register'
import Navbar from './pages/component/Navbar'

function App() {


  return (
    
   <div>
    <Navbar/>

    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/register" element={<Register/>}/>
       </Routes>
  
        
      
   </div>
       
   
  )
}

export default App
