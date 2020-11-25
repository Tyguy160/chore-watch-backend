const { Router } = require('express');
const { choreRouter } = require('../chore/chore.router');

const {
  createUser,
  getUsers,
  getUserById,
  updateUsers,
  updateUserById,
  deleteUsers,
  deleteUserById,
} = require('./user.controller');

const userRouter = Router();

// Create user
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

userRouter.use('/:id/chores', choreRouter);

module.exports = { userRouter };
