// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
const manageCommas = function(elems) {
  if (elems.indexOf(',') === -1) {
    elems = [elems.join('')];
  } else if (elems.indexOf(',')) {

  }
  return elems;
};

const parseJSON = function(json) {
  const isNumber = Number(json);
  const parseArray = [];
  const parseObject = {};
  if (json.startsWith('[')) {
    debugger;
    const jsonToArray = json.split('');
    let validElems = jsonToArray.filter(a =>
      a !== '[' && a !== ']' && a !== '"'
    );
    const managed = manageCommas(validElems);
    managed.forEach(a => parseArray.push(parseJSON(a)));
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

//Can Parse Array With Single One Character Primitive or Single Digit Number
// console.log(parseJSON( JSON.stringify([8]) ));
// console.log(Array.isArray(parseJSON( JSON.stringify([8]) )));
// console.log(parseJSON( JSON.stringify(['a']) ));

// Can Parse Array of Single String or Number of Varying Lenth
console.log(parseJSON( JSON.stringify(['ab']) ));
console.log(parseJSON( JSON.stringify(['89']) ));
console.log(parseJSON( JSON.stringify(['Hello my name is David']) ));
console.log(parseJSON( JSON.stringify(['890000']) ));
// jsonToArray === ["[", """, "a", "b", """, "]"]

console.log(parseJSON( JSON.stringify(['a', 'b']) ));


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
