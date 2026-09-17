import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer.jsx'
import Pay from './Pay.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <center>
      <h1>Welcome to my app</h1>
    <Navbar/>
    <Footer/>
    <Pay/>
     </center> 
    </>
  )
}

export default App
