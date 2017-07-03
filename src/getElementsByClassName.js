// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch

var getElementsByClassName = function(className) {
  var $body = document.body;
  var nodeList = [];
  var traverse = function(className, $node) {
    if ($node.className && $node.classList.contains(className)) {
      nodeList.push($node);
    }
    if ($node.hasChildNodes()) {
      $node.childNodes.forEach(function(child) {
        traverse(className, child);
      });
    }
  };
  traverse(className, $body);
  return nodeList;
};
