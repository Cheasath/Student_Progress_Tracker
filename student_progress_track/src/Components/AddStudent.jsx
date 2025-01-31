import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/App.css";

const AddStudent = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
     const res= await axios.post("http://localhost:3001/students/add", data);
     if(res.data.success) {
      alert("Student added successfully");
      navigate("/history");
     }
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student");
    }
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input {...register("name")} placeholder="Name" required />
        <input {...register("instructor")} placeholder="Instructor" required />
        <input {...register("course")} placeholder="Course" required />
        <select {...register("progress")} required>
          <option value="At Track">At Track</option>
          <option value="At Risk">At Risk</option>
          <option value="Behind">Behind</option>
        </select>
        <select {...register("grade")} required>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <button type="submit" className="btn">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
