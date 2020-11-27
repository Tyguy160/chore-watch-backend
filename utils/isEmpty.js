const isEmpty = (input) => {
  try {
    let empty = false;

    if (
      input === undefined ||
      input === null ||
      (typeof field === 'string' && field.trim().length === 0) ||
      (typeof field === 'object' && Object.keys(field).length === 0)
    ) {
      empty = true;
    }
    return empty;
  } catch (err) {
    return err;
  }
};

module.exports = { isEmpty };
