function existy(x) {
  return x != null;
}

function finder(valueFun, besrFun, coll) {
  return coll.reduce((best, current) => {
    const bestValue = valueFun(best);
    const currentValue = valueFun(current);

    return bestValue === besrFun(bestValue, currentValue)
      ? bestValue
      : currentValue;
  });
}

function best(fn, coll) {
  return coll.reduce((x, y) => {
    return fn(x, y) ? x : y;
  });
}

function repeat(times, value) {
  const arr = Array(times).fill("");
  return arr.map(v => {
    return value;
  });
}

function repeatedy(times, fn) {
  return range(times).map(fn);
}

function iterateUntil(fn, check, init) {
  var ret = [];
  var result = fn(init);

  while (check(result)) {
    ret.push(result);
    result = fn(result);
  }

  return ret;
}

function alwas(value) {
  return function() {
    return value;
  };
}

function invoker(name, method) {
  return function(target, ...rest) {
    if (!existy(target)) fail("Must provide a target");
    if (target[name] === method) {
      return target[name].apply(target, rest);
    }
    return null;
  };
}
