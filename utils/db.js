const mongoose = require('mongoose');

const url = process.env.DB_URL;

const connect = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connect };
