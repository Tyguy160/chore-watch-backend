const { Chore } = require('./chore.model');

const createChore = async (req, res) => {
  try {
    res.status(200).send({ message: 'Created chore' });
  } catch (err) {
    console.error(err);
    res.status(409).send({ error: err });
  }
};

const getChores = (req, res) => {
  res.status(200).send({ message: 'Getting chores' });
};

const getChoreById = (req, res) => {
  res.status(200).send({ message: 'Getting chore by ID' });
};

const updateChores = (req, res) => {
  res.status(200).send({ message: 'Updating chores' });
};

const updateChoreById = (req, res) => {
  res.status(200).send({ message: 'Updating chore by ID' });
};

const deleteChores = (req, res) => {
  res.status(200).send({ message: 'Deleting chores' });
};

const deleteChoreById = (req, res) => {
  res.status(200).send({ message: 'Deleting chore by ID' });
};

module.exports = {
  createChore,
  getChores,
  getChoreById,
  updateChores,
  updateChoreById,
  deleteChores,
  deleteChoreById,
};
