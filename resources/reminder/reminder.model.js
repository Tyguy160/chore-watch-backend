const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  acknowledged: { type: Boolean, required: true, default: false },
});

const Reminder = mongoose.model('reminder', reminderSchema, 'reminder');

module.exports = { Reminder };
