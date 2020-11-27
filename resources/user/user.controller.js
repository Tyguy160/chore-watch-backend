const { User } = require('./user.model');
const bcrypt = require('bcrypt');
const { validateInformation } = require('../../validation/validateInfo');
const jwt = require('jsonwebtoken');
const isEmpty = require('../../utils/isEmpty');

const createUser = async (req, res) => {
  try {
    const { errors, isValid } = validateInformation(req.body);
    if (isValid) {
      const { email, password } = req.body;
      let hashedPass = await bcrypt.hash(password, 10);

      const newUser = new User({
        email,
        password: hashedPass,
      });
      await newUser.save();

      const payload = {
        user: {
          id: newUser._id,
        },
      };

      jwt.sign(
        payload,
        'randomString',
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } else {
      throw errors;
    }
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).send({
        message: 'A user with that email already exists',
      });
    } else if (err) {
      res.status(400).send({
        message: err,
      });
    } else {
      res.status(500).send({
        message: 'An unknown error occurred. Please try again',
      });
    }
  }
};

// Get all users in database
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Something went wrong' });
  }
};

// Get information about a specific user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    console.log(`Logging in with ${user}`);
    res.status(200).send({ message: user._id });
  } catch (err) {
    res.status(403).send({ message: "Can't fetch user" });
  }
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

const login = async (req, res) => {
  try {
    const { errors, isValid } = validateInformation(req.body);

    if (isValid) {
      const { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({
          message: 'User not found or incorrect password',
        });
      }

      const passMatch = bcrypt.compare(password, user.password);

      if (!passMatch) {
        return res.status(400).send({
          message: 'User not found or incorrect password',
        });
      }
      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(
        payload,
        'randomString',
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } else {
      return res.status(400).send(errors);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Server error' });
  }
};

const logout = (req, res) => {
  res.status(200).send({ message: 'Logged out' });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUsers,
  updateUserById,
  deleteUsers,
  deleteUserById,
  login,
  logout,
};
