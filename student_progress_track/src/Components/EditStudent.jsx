import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "../Styles/App.css";

const EditStudent = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
    const student = data[id];
    if (student) {
      setValue("name", student.name);
      setValue("instructor", student.instructor);
      setValue("course", student.course);
      setValue("progress", student.progress);
      setValue("grade", student.grade);
    }
  }, [id, setValue]);

  const onSubmit = (data) => {
    const updatedStudents = [...students];
    updatedStudents[id] = data;
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    navigate("/history");
  };

  return (
    <div className="container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input {...register("name")} required />
        <input {...register("instructor")} required />
        <input {...register("course")} required />
        <button type="submit" className="btn">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
