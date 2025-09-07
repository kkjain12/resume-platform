import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Resume saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Navbar */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold tracking-wide">📄 Resume Platform</h1>
        <div className="space-x-6">
          <Link to="/dashboard/resumeform" className="hover:text-blue-400 transition">
            Resume Form
          </Link>
          <Link to="/dashboard/resumepreview" className="hover:text-blue-400 transition">
            Resume Preview
          </Link>
          <Link to="/dashboard" className="hover:text-blue-400 transition">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* ✅ Form content */}
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create Resume</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-2xl p-8 space-y-6 max-w-lg mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            required
          />
          <textarea
            name="education"
            placeholder="Education Details"
            value={formData.education}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            rows="3"
          />
          <textarea
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg"
            rows="3"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            💾 Save Resume
          </button>
        </form>
      </div>
    </div>
  );
}
