const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Routes
app.use("/", routes);
app.use(cors());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
