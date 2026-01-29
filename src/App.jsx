import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LoginInstructor from "./components/LoginInstructor";
import InstrucNavbar from "./components/InstrucNavbar";
import Instructor from "./pages/Instructor";
import SignupInstructor from "./components/SignupInstructor";
import Dashboard from "./components/Dashboard";
import AddNewCourses from "./components/AddNewCourses";

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* instructor section */}
          <Route path="/becomeanInstructor" element={<Instructor />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="newcourses" element={<AddNewCourses />} />
            <Route path="signup" element={<SignupInstructor />} />
            <Route path="login" element={<LoginInstructor />} />
          </Route>
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
