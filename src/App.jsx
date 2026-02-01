import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LoginInstructor from "./components/LoginInstructor";
import InstrucNavbar from "./components/InstrucNavbar";
import Instructor from "./pages/Instructor";
import SignupInstructor from "./components/SignupInstructor";
import Dashboard from "./components/Dashboard";
import AddNewCourses from "./components/AddNewCourses";
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage";
import Category from "./pages/Category"
import WebDevelop from './pages/WebDevelop'
import FreeLearning from "./pages/FreeLearning";
import Courses from './components/Courses'



function App() {
  const location = useLocation();
  //check karo instructor route ke liye
  const isInstructorRoute = location.pathname.startsWith("/becomeanInstructor");
  return (
    <>
      <div className="bg-black">
        {/* ✅ Navbar switch */}
        {isInstructorRoute ? <InstrucNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses/>} />
          
          

          {/* instructor section */}
          <Route path="/becomeanInstructor" element={<Instructor />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="newcourses" element={<AddNewCourses />} />
            <Route path="signup" element={<SignupInstructor />} />
            <Route path="login" element={<LoginInstructor />} />
          </Route>
          {/*courses section */}

          <Route path="/category" element={<Category/>}>
          <Route index path="web-development" element={<Courses/>}/>
          </Route>

          <Route path="free-learning" element={<FreeLearning />} />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
