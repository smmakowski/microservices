function processDate(queryDate) {
  // create dateObj for response
  let dateObj = {
    unix: null,
    natural : null,
  };

  const date = new Date(queryDate);
  dateObj.unix = date.getTime() / 1000; // recalc to seconds
  const months = {
    1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
    7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December',
  }

  dateObj.natural = `${months[date.getUTCMonth() + 1]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;

  return dateObj;
}

module.exports = {
  processDate
}
