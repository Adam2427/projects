document.querySelector("body").addEventListener("click", (e) => {
  var i = 0;
  var taglist = "";
  var _tag = e.target;
  debugger;
  while (i >= 0) {
    taglist += _tag.tagName + " → ";

    if (_tag.tagName == "HTML") {
      i = -2;
    }
    _tag = _tag.parentElement;

    i++;
  }

  alert(taglist.slice(0, -2));
});
