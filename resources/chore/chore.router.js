const { Router } = require('express');
const { reminderRouter } = require('../reminder/reminder.router');

const {
  createChore,
  getChores,
  getChoreById,
  updateChores,
  updateChoreById,
  deleteChores,
  deleteChoreById,
} = require('./chore.controller');

const choreRouter = Router();

// Create chore
choreRouter.post('/', createChore);

// Read chore
choreRouter.get('/', getChores);
choreRouter.get('/:id', getChoreById);

// Update chore
choreRouter.put('/', updateChores);
choreRouter.put('/:id', updateChoreById);

// Delete chore
choreRouter.delete('/', deleteChores);
choreRouter.delete('/:id', deleteChoreById);

choreRouter.use('/:id/reminders', reminderRouter);

module.exports = { choreRouter };
