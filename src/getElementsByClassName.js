// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  const nodeList = [];
  const traverse = (className, $node) => {
    if ($node.classList.contains(className)) {
      nodeList.push($node);
    }
  };
  traverse(className, document.body);
  return nodeList;
};

console.log(getElementsByClassName('targetClassName'));
