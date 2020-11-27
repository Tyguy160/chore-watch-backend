const isEmpty = (input) => {
  try {
    let empty = false;

    if (
      input === undefined ||
      input === null ||
      (typeof input === 'string' && input.trim().length === 0) ||
      (typeof input === 'object' && Object.keys(input).length === 0)
    ) {
      empty = true;
    }
    return empty;
  } catch (err) {
    return err;
  }
};

module.exports = { isEmpty };
