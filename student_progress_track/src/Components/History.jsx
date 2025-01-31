import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const History = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("https://student-progress-tracker.onrender.com/students"); // Adjust if backend runs on a different port
        setStudents(res.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`https://student-progress-tracker.onrender.com/students/${id}`);
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Download student data
  const downloadData = () => {
    const dataStr = JSON.stringify(students, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "students.json";
    link.click();
  };

  // Prepare data for Pie Chart
  const progressData = {
    labels: ["At Track", "At Risk", "Behind"],
    datasets: [
      {
        data: [
          students.filter((s) => s.progress === "At Track").length,
          students.filter((s) => s.progress === "At Risk").length,
          students.filter((s) => s.progress === "Behind").length,
        ],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  return (
    <div className="container">
      <h2>Student History</h2>
      <button className="btn" onClick={downloadData}>
        Download Data
      </button>
      <div className="chart-container">
        <Pie data={progressData} />
      </div>
      <ul>
        {students.map((student) => (
          <li className="student-item" key={student._id}>
            {student.name} - {student.progress} - {student.grade}
            <Link to={`/edit-student/${student._id}`}>Edit</Link>
            <button className="btn delete-btn" onClick={() => deleteStudent(student._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
