import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post("https://student-progress-tracker.onrender.com/auth/login", { email, password });
      if(res.data.statuscode){
        alert(res.data.message);
        navigate('/add-student');
      }

    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin} className="btn">Login</button>
    </div>
  );
};

export default Login;
