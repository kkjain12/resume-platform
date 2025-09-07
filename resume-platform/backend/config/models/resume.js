const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false // optional, agar authentication laga to userId ka use karega
  },
  personal: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String }
  },
  education: [
    {
      degree: String,
      institution: String,
      year: String
    }
  ],
  experience: [
    {
      role: String,
      company: String,
      duration: String,
      description: String
    }
  ],
  skills: [String],
  versions: [
    {
      personal: Object,
      education: Array,
      experience: Array,
      skills: Array,
      createdAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);
