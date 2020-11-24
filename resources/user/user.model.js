const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: false },
  plan: { type: String, required: true, default: 'Free' },
  chores: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'chore', required: true },
  ],
  defaultNotifications: {
    text: { type: Boolean, required: true, default: false },
    email: { type: Boolean, required: true, default: false },
    app: { type: Boolean, required: true, default: true },
  },
});

const User = mongoose.model('user', userSchema, 'user');

module.exports = { User };
