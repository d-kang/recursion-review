// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  var isNumber = Number(json);
  if (isNumber === isNumber) {
    return isNumber;
  } else if (json === 'null') {
    return null;
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  }

};

console.log(parseJSON('9'));
console.log(parseJSON('null'));
console.log(parseJSON('true'));
console.log(parseJSON('false'));


// var stringifiedObjects = [
//   "9",
//   "null",
//   "true",
//   "false",
//   `"Hello world"`,
//   "[]", "[8]",
//   `["hi"]`,
//   `[8,"hi"]`,
//   "[1,0,-1,-0.3,0.3,1343.32,3345,0.00011999999999999999]",
//   "[8,[[],3,4]]",
//   `[[[["foo"]]]]`,
//   "{}",
//   `{"a":"apple"}`,
//   `{"foo":true,"bar":false,"baz":null}`,
//   `{"boolean, true":true,"boolean, false":false,"null":null}`,
//   `{"a":{"b":"c"}}", "{"a":["b","c"]}`,
//   `[{"a":"b"},{"c":"d"}]`,
//   `{"a":[],"c":{},"b":true}`
// ]

// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];
