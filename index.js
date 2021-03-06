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

function deepestChild() {
  var target = document.getElementById(`grand-node`);
  while (target.children.length > 0) {
    target = target.children[0];
  }
  return target;
}
