const { Router } = require('express');

const {
  createReminder,
  getReminders,
  getReminderById,
  updateReminders,
  updateReminderById,
  deleteReminders,
  deleteReminderById,
} = require('./reminder.controller');

const reminderRouter = Router();

// Create reminder
reminderRouter.post('/', createReminder);

// Read reminder
reminderRouter.get('/', getReminders);
reminderRouter.get('/:id', getReminderById);

// Update reminder
reminderRouter.put('/', updateReminders);
reminderRouter.put('/:id', updateReminderById);

// Delete reminder
reminderRouter.delete('/', deleteReminders);
reminderRouter.delete('/:id', deleteReminderById);

module.exports = { reminderRouter };
