// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let stringified = '';
  if (Array.isArray(obj)) {
    stringified += '[';
    const elements = obj.map(elem => stringifyJSON(elem));
    stringified += elements.join(',');
    stringified += ']';
  } else if (typeof obj === 'object' && obj !== null) {
    let keys = Object.keys(obj);
    keys = keys.filter(a => obj[a] !== undefined );
    keys = keys.filter(a => typeof obj[a] !== 'function' );
    const len = keys.length - 2;
    stringified += '{';
    keys.forEach((key, i) => {
      const value = obj[key];
      stringified += stringifyJSON(key);
      stringified += ':';
      stringified += stringifyJSON(value);
      if (i <= len) {
        stringified += ',';
      }
    });
    stringified += '}';
  } else if (typeof obj === 'number') {
    stringified += `${obj}`;
  } else if (obj === null) {
    stringified += 'null';
  } else if (obj === true) {
    stringified += 'true';
  } else if (obj === false) {
    stringified += 'false';
  } else if (typeof obj === 'string') {
    stringified += `"${obj}"`;
  }
  return stringified;
};
