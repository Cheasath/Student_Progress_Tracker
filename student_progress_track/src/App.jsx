import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddStudent from "./Components/AddStudent";
import History from "./Components/History";
import EditStudent from "./Components/EditStudent";
import AllStudents from "./Components/AllStudents";
import Login from "./Components/Login"; 
import Signup from "./Components/Signup";
import "./Styles/App.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>

          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/history" element={<History />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/all-students" element={<AllStudents />} />  {/* New Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
