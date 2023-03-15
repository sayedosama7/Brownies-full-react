import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from "./Home"
import {useState , useEffect} from 'react'
import DotLoader from "react-spinners/DotLoader";
import './App.css'
import Menu from './Menu'

const App = () => {

  const [loading,setLoading] =useState([false]);
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false)
  } , 3000)

} ,[])

  return (
    <BrowserRouter>

{loading ? 
    <div className="loader">
     <DotLoader color={'#fdcf5a'}  size={90} speedMultiplier={1} />
    </div>:
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Component' element={<Menu />} />




    </Routes>
}
    </BrowserRouter>
  )
}

export default App