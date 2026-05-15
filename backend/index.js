const express = require("express");
const dotenv = require("dotenv");
const prisma = require("./config/prisma");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userRoutes = require("./modules/user/user.route");
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
