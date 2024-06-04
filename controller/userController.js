const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create user
const createUser = async (req, res) => {
  try {
    const createUser = await prisma.users.create({ data: req.body });
    res.status(200).json(createUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const getAll = await prisma.users.findMany();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: "Failed to get users" });
  }
};

// Get user
const getUser = async (req, res) => {
  try {
    // Get user id
    const { id } = req.params;

    const getUser = await prisma.users.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    // Get the id of a user
    const id = req.params.id;
    // Get input from req body
    const { firstName, lastName } = req.body;
    // Update
    const resUpdate = await prisma.users.update({
      where: {
        id: parseInt(id),
      },
      data: { firstName, lastName },
    });
    // Response
    res.status(200).json(resUpdate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    // Get the id of a user
    const id = req.params.id;
    // Delete user
    await prisma.users.delete({
      where: {
        id: parseInt(id),
      },
    });
    // Response
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };
