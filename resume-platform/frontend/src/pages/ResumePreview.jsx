import { Link } from "react-router-dom";

export default function ResumePreview() {
  // static data (baad me API se connect kar sakte ho)
  const sampleResume = {
    name: "Khushi Jain",
    email: "khushi@example.com",
    education: "B.Tech in Computer Science",
    skills: "React, Node.js, MongoDB, Tailwind CSS",
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

      {/* ✅ Resume Preview content */}
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Resume Preview</h2>
        <div className="bg-white shadow rounded-2xl p-8 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900">{sampleResume.name}</h3>
          <p className="text-gray-600">{sampleResume.email}</p>

          <div className="mt-6">
            <h4 className="font-bold text-gray-800">🎓 Education</h4>
            <p className="text-gray-700">{sampleResume.education}</p>
          </div>

          <div className="mt-6">
            <h4 className="font-bold text-gray-800">💡 Skills</h4>
            <p className="text-gray-700">{sampleResume.skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
