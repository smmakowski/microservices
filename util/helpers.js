function processDate(queryDate) {
  // check if nall numbers
  
  const date = new Date(queryDate);
  // create dateObj for response
  let dateObj = {
    unix: null,
    natural : null,
  };
  // if valid date
  if (date instanceof Date && !isNaN(date.valueOf())) {
    dateObj.unix = date.getTime() / 1000;
    dateObj.natural = 'IMPLEMENT ME';
  } else {
    // do nothing since props already null
  }

  return dateObj;
}

module.exports = {
  processDate
}
