const { Reminder } = require('./reminder.model');

const createReminder = async (req, res) => {
  res.status(200).send({ message: 'Creating reminder' });
};

// Get all reminders in database
const getReminders = (req, res) => {
  res.status(200).send({ message: 'Getting reminders' });
};

// Get information about a specific reminder by ID
const getReminderById = (req, res) => {
  res.status(200).send({ message: 'Getting reminder by ID' });
};

// Bulk update reminders
const updateReminders = (req, res) => {
  res.status(200).send({ message: 'Updating reminders' });
};

// Update specific reminder by ID
const updateReminderById = (req, res) => {
  res.status(200).send({ message: 'Updating reminder by ID' });
};

// Delete all reminders
const deleteReminders = (req, res) => {
  res.status(200).send({ message: 'Deleting reminders' });
};

// Delete specific reminder by ID
const deleteReminderById = (req, res) => {
  res.status(200).send({ message: 'Deleting reminder by ID' });
};

module.exports = {
  createReminder,
  getReminders,
  getReminderById,
  updateReminders,
  updateReminderById,
  deleteReminders,
  deleteReminderById,
};
