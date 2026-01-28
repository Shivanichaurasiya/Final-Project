import Navbar from "./components/Navbar"
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
 

  return (
    <>
    <div className="bg-black">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      

    </Routes>
    </div>

    <div>
      <Footer/>
    </div>
 
    </>
  )
}

export default App
