const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log("MongoDB Connection Error:", error));

app.use("/students", studentRoutes);
app.use("/auth", authRoutes);

app.listen(3001, () => {
  console.log(`Server running on port ${3001}`);
});
