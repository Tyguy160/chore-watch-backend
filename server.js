const express = require('express');
const { connect } = require('./utils/db');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const { userRouter } = require('./resources/user/user.router');

// Create express app
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routers
app.use('/api/users', userRouter);

const start = async () => {
  try {
    await connect();
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { start };
