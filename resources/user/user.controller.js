const { User } = require('./user.model');

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({
      email,
      password,
    });
    await newUser.save();
    res.send({ message: 'Created user' });
  } catch (err) {
    console.error(err);
    res
      .status(409)
      .send({
        message:
          err.code === 11000
            ? 'A user with that email already exists'
            : 'An unknown error occurred. Please try again',
      });
  }
};

module.exports = { createUser };
