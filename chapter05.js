function dispatch(...funcs) {
  var size = funcs.length;

  return function(target) {
    var ret;

    for (var i = 0; i < size; i++) {
      ret = funcs[i].call(funcs[i], target);

      if (ret) return ret;
    }

    return ret;
  };
}

const str = dispatch(
  invoker("toString", Array.prototype.toString),
  invoker("toString", String.prototype.toString)
);

function stringReverse(str) {
  if (!str) return "";
  return str
    .split("")
    .reverse()
    .join("");
}

const reverse = dispatch(
  invoker("reverse", Array.prototype.reverse),
  stringReverse
);

