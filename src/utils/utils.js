exports.dateConverter = date => {
  const utcDate = new Date(date).toUTCString();
  return utcDate;
};
