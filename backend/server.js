// server.mjs
import express from "express";

const app = express();

// Define API routes
app.get("/api/data", (req, res) => {
  // Handle API request logic here
  res.json({ message: "Hello from Express!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
