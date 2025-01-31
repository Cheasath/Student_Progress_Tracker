import { Link } from "react-router-dom";
import "../Styles/App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Student Tracker</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Signup</Link>
        <Link to="/add-student" className="nav-link">Add Student</Link>
        <Link to="/history" className="nav-link">History</Link>
        <Link to="/all-students" className="nav-link">All Students</Link>
        <Link to="/" className="nav-link">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
