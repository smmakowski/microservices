function processDate(queryDate) {
  // create dateObj for response
  let dateObj = {
    unix: null,
    natural : null,
  };
  if (!isNaN(queryDate)) {
    const date = new Date(queryDate);
    dateObj.unix = date.getTime() / 1000; // recalc to seconds
    const months = {
      1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
      7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December',
    }

    dateObj.natural = `${months[date.getUTCMonth() + 1]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  }

  return dateObj;
}

function createHeadersObject(ip, lang, soft) {
  const language = lang.split(',')[0] || null;
  let software = soft.match(/\(([^)]+)\)/)[0] || null ;

  if (software) {
    software = software.slice(1, software.length - 1);
  }

  const ipaddress = ip.match(/(\d+).(\d+).(\d+).(\d+)/)[0] || null;

  const headersObj = {language, software, ipaddress}
  return headersObj;
}

module.exports = {
  processDate,
  createHeadersObject,
}
