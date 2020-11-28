const express = require('express');
const { connect } = require('./utils/db');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const { userRouter } = require('./resources/user/user.router');
const session = require('express-session');
const redis = require('redis');
let RedisStore = require('connect-redis')(session);

let redisClient = redis.createClient();

// Create express app
const app = express();
const port = process.env.PORT || 4000;

const sessionDetails = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
    sameSite: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 100,
  },
  store: new RedisStore({ client: redisClient, ttl: 86400 }),
};

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(session(sessionDetails));

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
