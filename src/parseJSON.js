// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
const manageCommas = function(elems) {
  // validElems === ["a", ",", "b"]
  // commaIndex === 1
  // validElems === ["a", "b", "c", ",", "e", "f", "g"]
  // commaIndex === 3
  const commaIndex = elems.indexOf(',');
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
    json = json.replace(/ /, '');
    if (json.length === 2) { return parseArray; }
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
//
// // Can Parse Array With Single One Character Primitive or Single Digit Number
// console.log(parseJSON( JSON.stringify([8]) ));
// console.log(Array.isArray(parseJSON( JSON.stringify([8]) )));
// console.log(parseJSON( JSON.stringify(['a']) ));
//
// // Can Parse Array of Single String or Number of Varying Lenth
// console.log(parseJSON( JSON.stringify(['ab']) ));
// console.log(parseJSON( JSON.stringify(['89']) ));
// console.log(parseJSON( JSON.stringify(['Hello my name is David']) ));
// console.log(parseJSON( JSON.stringify(['890000']) ));
// // jsonToArray === ["[", """, "a", "b", """, "]"]
//
// // Can Parse Array of Multiple Strings or Numbers of Any Length
// console.log(parseJSON( JSON.stringify(['a', 'b']) ));
// console.log(parseJSON( JSON.stringify(['a', 'b', 'd', 'e', 'f']) ));
// console.log(parseJSON( JSON.stringify(['1', '2', '3', '4', '5']) ));
// console.log(parseJSON( JSON.stringify(['123', '456', '789', '101112', '131415']) ));
// console.log(parseJSON( JSON.stringify(['abc', 'efg']) ));
// console.log(parseJSON( JSON.stringify(['abc', 'efg', 'hij', 'klmnop']) ));
// console.log(parseJSON( JSON.stringify(['abc', 'efg', 'hij', '123456']) ));


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




parseableStrings = [
  // basic stuff
  '[]',
  '{"foo": ""}',
  '{}',
  '{"foo": "bar"}',
  '["one","two"]',
  '{"a": "b", "c": "d"}',
  '[null,false,true]',
  '{"foo": true, "bar": false, "baz": null}',
  '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
  '{"boolean, true": true, "boolean, false": false, "null": null }',

  // basic nesting
  '{"a":{"b":"c"}}',
  '{"a":["b", "c"]}',
  '[{"a":"b"}, {"c":"d"}]',
  '{"a":[],"c": {}, "b": true}',
  '[[[["foo"]]]]',

  // escaping
  '["\\\\\\"\\"a\\""]',
  '["and you can\'t escape thi\s"]',

  // everything all at once
  '{"CoreletAPIVersion":2,"CoreletType":"standalone",' +
    '"documentation":"A corelet that provides the capability to upload' +
    ' a folderâ€™s contents into a userâ€™s locker.","functions":[' +
    '{"documentation":"Displays a dialog box that allows user to ' +
    'select a folder on the local system.","name":' +
    '"ShowBrowseDialog","parameters":[{"documentation":"The ' +
    'callback function for results.","name":"callback","required":' +
    'true,"type":"callback"}]},{"documentation":"Uploads all mp3 files' +
    ' in the folder provided.","name":"UploadFolder","parameters":' +
    '[{"documentation":"The path to upload mp3 files from."' +
    ',"name":"path","required":true,"type":"string"},{"documentation":' +
    ' "The callback function for progress.","name":"callback",' +
    '"required":true,"type":"callback"}]},{"documentation":"Returns' +
    ' the server name to the current locker service.",' +
    '"name":"GetLockerService","parameters":[]},{"documentation":' +
    '"Changes the name of the locker service.","name":"SetLockerSer' +
    'vice","parameters":[{"documentation":"The value of the locker' +
    ' service to set active.","name":"LockerService","required":true' +
    ',"type":"string"}]},{"documentation":"Downloads locker files to' +
    ' the suggested folder.","name":"DownloadFile","parameters":[{"' +
    'documentation":"The origin path of the locker file.",' +
    '"name":"path","required":true,"type":"string"},{"documentation"' +
    ':"The Window destination path of the locker file.",' +
    '"name":"destination","required":true,"type":"integer"},{"docum' +
    'entation":"The callback function for progress.","name":' +
    '"callback","required":true,"type":"callback"}]}],' +
    '"name":"LockerUploader","version":{"major":0,' +
    '"micro":1,"minor":0},"versionString":"0.0.1"}',
  '{ "firstName": "John", "lastName" : "Smith", "age" : ' +
    '25, "address" : { "streetAddress": "21 2nd Street", ' +
    '"city" : "New York", "state" : "NY", "postalCode" : ' +
    ' "10021" }, "phoneNumber": [ { "type" : "home", ' +
    '"number": "212 555-1234" }, { "type" : "fax", ' +
    '"number": "646 555-4567" } ] }',
  '{\r\n' +
    '          "glossary": {\n' +
    '              "title": "example glossary",\n\r' +
    '      \t\t"GlossDiv": {\r\n' +
    '                  "title": "S",\r\n' +
    '      \t\t\t"GlossList": {\r\n' +
    '                      "GlossEntry": {\r\n' +
    '                          "ID": "SGML",\r\n' +
    '      \t\t\t\t\t"SortAs": "SGML",\r\n' +
    '      \t\t\t\t\t"GlossTerm": "Standard Generalized ' +
    'Markup Language",\r\n' +
    '      \t\t\t\t\t"Acronym": "SGML",\r\n' +
    '      \t\t\t\t\t"Abbrev": "ISO 8879:1986",\r\n' +
    '      \t\t\t\t\t"GlossDef": {\r\n' +
    '                              "para": "A meta-markup language,' +
    ' used to create markup languages such as DocBook.",\r\n' +
    '      \t\t\t\t\t\t"GlossSeeAlso": ["GML", "XML"]\r\n' +
    '                          },\r\n' +
    '      \t\t\t\t\t"GlossSee": "markup"\r\n' +
    '                      }\r\n' +
    '                  }\r\n' +
    '              }\r\n' +
    '          }\r\n' +
    '      }\r\n'
];


var result = parseableStrings.map(a => JSON.parse(a));


const basicVals = [
  '[]',
  '{"foo": ""}',
  '{}',
  '{"foo": "bar"}',
  '["one", "two"]',
  '{"a": "b", "c": "d"}',
  '[null,false,true]',
  '{"foo": true, "bar": false, "baz": null}',
  '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
  '{"boolean, true": true, "boolean, false": false, "null": null }'
];

const basicValsNativeParse = basicVals.map(a => JSON.parse(a));
const basicValsMyParse = basicVals.map(a => parseJSON(a));
const areAllBasicValsEqual = _.isEqual(basicValsNativeParse, basicValsMyParse);
console.log({areAllBasicValsEqual});

var test0 = _.isEqual( basicValsNativeParse[0], basicValsMyParse[0] );
var test1 = _.isEqual( basicValsNativeParse[1], basicValsMyParse[1] );
var test2 = _.isEqual( basicValsNativeParse[2], basicValsMyParse[2] );
var test3 = _.isEqual( basicValsNativeParse[3], basicValsMyParse[3] );
var test4 = _.isEqual( basicValsNativeParse[4], basicValsMyParse[4] );
var test5 = _.isEqual( basicValsNativeParse[5], basicValsMyParse[5] );
var test6 = _.isEqual( basicValsNativeParse[6], basicValsMyParse[6] );
var test7 = _.isEqual( basicValsNativeParse[7], basicValsMyParse[7] );
var test8 = _.isEqual( basicValsNativeParse[8], basicValsMyParse[8] );
var test9 = _.isEqual( basicValsNativeParse[9], basicValsMyParse[9] );

console.log({test4});

console.log('all basic val arrays', {
  test0,
  test4,
  test6,
  test8,
});

console.log('all basic val objects', {
  test1,
  test2,
  test3,
  test5,
  test7,
  test9
});
// var test4 = _.isEqual( basicValsNativeParse[4], basicValsMyParse[4] );
// console.log({test4});

const basicNesting = [
  '{"a":{"b":"c"}}',
  '{"a":["b", "c"]}',
  '[{"a":"b"}, {"c":"d"}]',
  '{"a":[],"c": {}, "b": true}',
  '[[[["foo"]]]]',
];

// const basicNestingNativeParse = basicVals.map(a => JSON.parse(a));
// const basicNestingMyParse = basicVals.map(a => JSON.parse(a));
// const result2 = _.isEqual(basicNestingNativeParse, basicNestingMyParse);
// console.log({result2});
