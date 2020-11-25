const { User } = require('./user.model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let hashedPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPass,
    });
    await newUser.save();
    res.send({ message: 'Created user' });
  } catch (err) {
    console.error(err);
    res.status(409).send({
      message:
        err.code === 11000
          ? 'A user with that email already exists'
          : 'An unknown error occurred. Please try again',
    });
  }
};

// Get all users in database
const getUsers = (req, res) => {
  res.status(200).send({ message: 'Getting users' });
};

// Get information about a specific user by ID
const getUserById = (req, res) => {
  res.status(200).send({ message: 'Getting user by ID' });
};

// Bulk update users
const updateUsers = (req, res) => {
  res.status(200).send({ message: 'Updating users' });
};

// Update specific user by ID
const updateUserById = (req, res) => {
  res.status(200).send({ message: 'Updating user by ID' });
};

// Delete all users
const deleteUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).send({ message: 'Deleting users' });
  } catch (err) {
    console.error(err);
    res.status(503).send({ message: 'Something went wrong' });
  }
};

// Delete specific user by ID
const deleteUserById = (req, res) => {
  res.status(200).send({ message: 'Deleting user by ID' });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUsers,
  updateUserById,
  deleteUsers,
  deleteUserById,
};
