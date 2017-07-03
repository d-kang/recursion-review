// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let stringified = '';
  if (Array.isArray(obj)) {
    stringified += `[]`;
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

console.log(stringifyJSON(9));

var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];
