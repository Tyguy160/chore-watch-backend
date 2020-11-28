const { Router } = require('express');
const { choreRouter } = require('../chore/chore.router');
const auth = require('../../auth/auth');

const {
  createUser,
  getUsers,
  getUserById,
  updateUsers,
  updateUserById,
  deleteUsers,
  deleteUserById,
  login,
  logout,
} = require('./user.controller');

const userRouter = Router();

// Create user (account registration)
userRouter.post('/', createUser);

// Read user
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);

// Update user
userRouter.put('/', updateUsers);
userRouter.put('/:id', updateUserById);

// Delete user
userRouter.delete('/', deleteUsers);
userRouter.delete('/:id', deleteUserById);

// Account login
userRouter.post('/login', login);

// Account logout
userRouter.post('/logout', logout);

// Account's chores
userRouter.use('/:id/chores', choreRouter);

module.exports = { userRouter };
