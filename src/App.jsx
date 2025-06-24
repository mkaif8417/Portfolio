
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
// import Verticle from './Components/Verticle'

function App() {


  return (
    <>
      <Navbar />
      {/* Holding vertical for while */}
{/* <Verticle/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />


        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>

    </>
  )
}

export default App
