import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResumeForm from "./pages/ResumeForm";
import Dashboard from "./pages/Dashboard";
import ResumePreview from "./pages/ResumePreview";
import './index.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/resumeform" element={<ResumeForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/resumepreview" element={<ResumePreview/>}/>
    </Routes>
  );
}

export default App;
