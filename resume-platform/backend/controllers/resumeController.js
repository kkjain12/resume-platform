exports.createResume = (req, res) => {
  res.json({ message: "Resume created successfully!" });
};

exports.getResumes = (req, res) => {
  res.json([{ id: 1, name: "Sample Resume" }]);
};
