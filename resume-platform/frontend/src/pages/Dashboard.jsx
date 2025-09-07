import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/resumes", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log("Resumes response:", res.data);
        setResumes(res.data);
      } catch (err) {
        console.error("Error fetching resumes", err);
      }
    };
    fetchResumes();
  }, []);

  const handleDownload = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/resumes/${id}/pdf`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      alert("Error downloading PDF");
    }
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

      {/* ✅ Dashboard content */}
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">My Resumes</h2>

        {resumes.length === 0 ? (
          <div className="text-center bg-white p-8 rounded-2xl shadow">
            <p className="text-gray-600">No resumes found. Create one!</p>
            <Link
              to="/dashboard/resumeform"
              className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              ➕ Create Resume
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <div
                key={resume.id}
                className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col justify-between transition"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{resume.name}</h3>
                  <p className="text-gray-500">{resume.email || "No email available"}</p>
                </div>
                <button
                  onClick={() => handleDownload(resume.id)}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  ⬇ Download PDF
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
