// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = obj => {
  let stringified = '';
  if (Array.isArray(obj)) {
    const elements = obj.map(elem => stringifyJSON(elem));
    stringified += `[${elements.join(',')}]`;
  } else if (typeof obj === 'object' && obj !== null) {
    const keys = Object.keys(obj);
    const len = keys.length - 2;
    const validKeyValues = keys.filter(key =>
      obj[key] !== undefined && typeof obj[key] !== 'function');
    stringified += '{';
    validKeyValues.forEach((key, i) => {
      const value = obj[key];
      stringified += `${stringifyJSON(key)}:${stringifyJSON(value)}`;
      if (i <= len) {
        stringified += ',';
      }
    });
    stringified += '}';
  } else if (typeof obj === 'string') {
    stringified += `"${obj}"`;
  } else if (obj === null) {
    stringified += 'null';
  } else {
    stringified += obj.toString();
  }
  return stringified;
};
