import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/App.css";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from MongoDB Atlas (Backend)
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("https://student-progress-tracker.onrender.com/students"); // Adjust if your backend runs on a different port
        setStudents(res.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  // Delete student from backend
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`https://student-progress-tracker.onrender.com/students/${id}`);
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: "blue", color: "black", padding: "20px", borderRadius: "8px" }}>
      <h2>All Students</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student._id} className="student-item">
            {student.name} - {student.course} - {student.instructor} - {student.progress} - {student.grade}
            <button onClick={() => deleteStudent(student._id)} className="btn delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudents;
