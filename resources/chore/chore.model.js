const mongoose = require('mongoose');

const choreSchema = new mongoose.Schema({
  recurrence: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  note: { type: String, required: false },
  notifications: {
    text: { type: Boolean, required: true, default: false },
    email: { type: Boolean, required: true, default: false },
    app: { type: Boolean, required: true, default: true },
  },
  reminders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'reminder',
    },
  ],
});

const Chore = mongoose.model('chore', choreSchema, 'chore');

module.exports = { Chore };
