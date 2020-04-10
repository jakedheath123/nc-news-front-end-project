const dateConverter = date => {
  const utcDate = new Date(date).toUTCString();
  return utcDate;
};

module.exports = { dateConverter };
