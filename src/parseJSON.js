// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
const manageCommas = function(elems) {
  // validElems === ["a", ",", "b"]
  // commaIndex === 1
  // validElems === ["a", "ba", "c", ",", "e", "f", "g"]
  // commaIndex === 3
  const commaIndex = elems.indexOf(',');
  debugger;
  let string = '';
  const acc = [];
  if (commaIndex === -1) {
    acc.push(elems.join(''));
  } else {
    let counter = '';
    for (var i = 0; i < elems.length; i++) {
      if (elems[i] !== ',') {
        counter += elems[i];
        if (i === elems.length - 1) {
          acc.push(counter);
        }
      } else if (elems[i] === ',') {
        acc.push(counter);
        counter = '';
      }
    }
  }
  return acc;
};

const parseJSON = function(json) {
  const isNumber = Number(json);
  const parseArray = [];
  const parseObject = {};
  if (json.startsWith('[')) {
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
// console.log(parseJSON( JSON.stringify(['ab']) ));
// console.log(parseJSON( JSON.stringify(['89']) ));
// console.log(parseJSON( JSON.stringify(['Hello my name is David']) ));
// console.log(parseJSON( JSON.stringify(['890000']) ));
// jsonToArray === ["[", """, "a", "b", """, "]"]

// Can Parse Array of Multiple Strings or Numbers of Any Length
console.log(parseJSON( JSON.stringify(['a', 'b']) ));
console.log(parseJSON( JSON.stringify(['a', 'b', 'd', 'e', 'f']) ));
console.log(parseJSON( JSON.stringify(['1', '2', '3', '4', '5']) ));
console.log(parseJSON( JSON.stringify(['123', '456', '789', '101112', '131415']) ));
console.log(parseJSON( JSON.stringify(['abc', 'efg']) ));
console.log(parseJSON( JSON.stringify(['abc', 'efg', 'hij', 'klmnop']) ));
console.log(parseJSON( JSON.stringify(['abc', 'efg', 'hij', '123456']) ));


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
