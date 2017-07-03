// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
const parseJSON = function(json) {
  const isNumber = Number(json);
  const parseArray = [];
  const parseObject = {};
  if (json.startsWith('[')) {
    debugger;
    const jsonToArray = json.split('');
    const validElems = jsonToArray.filter(a =>
      a !== '[' && a !== ']' && a !== '"'
    );
    validElems.forEach(a => parseArray.push(parseJSON(a)));
    return parseArray;
  }


  if (isNumber === isNumber) {
    return isNumber;
  } else if (json === 'null') {
    return null;
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else {
    return json.replace(/"/g, '');
  }

};

// console.log(parseJSON('9'));
// console.log(parseJSON('null'));
// console.log(parseJSON('true'));
// console.log(parseJSON('false'));
// console.log(parseJSON( JSON.stringify('Hello world') ));
// console.log(parseJSON( JSON.stringify([]) ));
// console.log(JSON.stringify([]).startsWith('['));
// console.log(_.isEqual( parseJSON( JSON.stringify([]) ), [] ));
// console.log(parseJSON( JSON.stringify([8]) ));
// console.log(Array.isArray(parseJSON( JSON.stringify([8]) )));
console.log(parseJSON( JSON.stringify(['a']) ));


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
