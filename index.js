function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  const list = document.querySelectorAll(`.ranked-list`);
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n;
  }
}

function deepestChilds() {
  
  var target = document.getElementById(`grand-node`);
  var child = target.children[0];
  while (child) {
    target = child;
    child = target.children[0];
  } 
  return target;
}

function deepestChild() {
  var target = document.getElementById(`grand-node`);
  var result = target.children[0];
  while (target) {
    
    target = target.children[0];
    result = target.children[0];
  }
  return result;
}
