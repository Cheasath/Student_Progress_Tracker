import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("https://student-progress-tracker.onrender.com/auth/signup", { email, password });
      alert("Signup Successful. Please Login.");
      navigate("/login");
    } catch (error) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup} className="btn">Signup</button>

      <p>
        Already a user?{" "}
        <button onClick={() => navigate("/login")} className="link-btn">Login</button>
      </p>
    </div>
  );
};

export default Signup;
