import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token); // JWT store
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-2xl w-96"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          className="border p-2 w-full mb-3 rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full mb-3 rounded"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
}
