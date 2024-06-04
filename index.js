const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Routes
app.use("/", routes);

// Create user
// app.post("/", async (req, res) => {
//   try {
//     const createUser = await prisma.users.create({ data: req.body });
//     res.status(200).json(createUser);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all users
// app.get("/", async (req, res) => {
//   try {
//     const getAllUsers = await prisma.users.findMany();
//     res.status(200).json(getAllUsers);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to get users" });
//   }
// });

// Get user
// app.get("/:id", async (req, res) => {
//   try {
//     // Get user id
//     const { id } = req.params;

//     const getUser = await prisma.users.findUnique({
//       where: {
//         id: parseInt(id),
//       },
//     });
//     res.status(200).json(getUser);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update user
// app.put("/:id", async (req, res) => {
//   try {
//     // Get the id of a user
//     const id = req.params.id;
//     // Get input from req body
//     const { firstName, lastName } = req.body;
//     // Update
//     const resUpdate = await prisma.users.update({
//       where: {
//         id: parseInt(id),
//       },
//       data: { firstName, lastName },
//     });
//     // Response
//     res.status(200).json(resUpdate);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/:id", async (req, res) => {
//   try {
//     // Get the id of a user
//     const id = req.params.id;
//     // Delete user
//     await prisma.users.delete({
//       where: {
//         id: parseInt(id),
//       },
//     });
//     // Response
//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
