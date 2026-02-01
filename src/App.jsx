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
import ProtectedRoute from './components/ProtectedRoute'
import FullSatckPage from './pages/FullSatckPage';
import MachineLearningPage from './pages/MachineLearningPage'
import DataSciencePage from './pages/DataSciencePage';
import DataStucturePage from './pages/DataStucturePage'
import UIDesignPage from './pages/UIDesignPage';


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
          {/* <Route path="/courses" element={<Courses/>} /> */}
          <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute> }/>

          
          

          {/* instructor section */}
          <Route path="/becomeanInstructor" element={<Instructor />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="newcourses" element={<AddNewCourses />} />
            <Route path="signup" element={<SignupInstructor />} />
            <Route path="login" element={<LoginInstructor />} />
          </Route>
          {/*courses section */}

          <Route path="/category" element={<ProtectedRoute><Category/></ProtectedRoute>}>
          <Route index path="web-development" element={<ProtectedRoute><WebDevelop/></ProtectedRoute>}/>
          <Route index path="full-stack" element={<ProtectedRoute><FullSatckPage/></ProtectedRoute>}/>
          <Route index path="machine-learning" element={<ProtectedRoute><MachineLearningPage/></ProtectedRoute>}/>
          <Route index path="data-science" element={<ProtectedRoute><DataSciencePage/></ProtectedRoute>}/>
          <Route index path="algorithms" element={<ProtectedRoute><DataStucturePage/></ProtectedRoute>}/>
          <Route index path="ui-ux" element={<ProtectedRoute><UIDesignPage/></ProtectedRoute>}/>

          </Route>

          <Route path="/free-learning" element={<FreeLearning />} />

        </Routes>

  

      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
