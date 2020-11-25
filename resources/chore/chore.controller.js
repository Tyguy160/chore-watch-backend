const { Chore } = require('./chore.model');

// Create a new chore
const createChore = async (req, res) => {
  try {
    res.status(200).send({ message: 'Created chore' });
  } catch (err) {
    console.error(err);
    res.status(409).send({ error: err });
  }
};

// Get all chores for current user
const getChores = (req, res) => {
  res.status(200).send({ message: 'Getting chores' });
};

// Get information about a specific chore by ID
const getChoreById = (req, res) => {
  res.status(200).send({ message: 'Getting chore by ID' });
};

// Bulk update chores
const updateChores = (req, res) => {
  res.status(200).send({ message: 'Updating chores' });
};

// Update specific chore by ID
const updateChoreById = (req, res) => {
  res.status(200).send({ message: 'Updating chore by ID' });
};

// Delete all chores
const deleteChores = (req, res) => {
  res.status(200).send({ message: 'Deleting chores' });
};

// Delete specific chore by ID
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
