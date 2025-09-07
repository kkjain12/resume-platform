import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-2xl w-96"
      >
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          className="border p-2 w-full mb-3 rounded"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
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
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Register
        </button>
      </form>
    </div>
  );
}
