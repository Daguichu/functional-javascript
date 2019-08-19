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

function uniqueString(len) {
  return Math.random()
    .toString(36)
    .substr(2, len);
}

function uniqueString(prefix) {
  return [prefix, new Data().getTime()].join("");
}

function makeUniqueStringFunction(start) {
  const count = start;

  return function(value) {
    return [value, count++].join("");
  };
}

var nums = [1, 2, 3, null, 5];

nums.reduce((pre, next) => pre * next);

function fnull(fn, ...args) {
  const defaults = args;

  return function(...arr) {
    const args = arr.map((e, i) => {
      return e || defaults[i];
    });
    fn.apply(null, args);
  };
}

function defaults(d) {
  return function(o, k) {
    var val = fnull(alwas, d[k]);
    return o && val(o[k]);
  };
}

function doSomething(config) {
  var lookup = defaults({ critical: 108 });

  return lookup(config, "critical");
}

function checker(...args) {
  return function(obj) {
    return args.reduce((prev, next) => {
      if (next(obj)) {
        return prev;
      }
      prev.push(next.message);
    }, []);
  };
}

function valiator(message, fn) {
  var f = function(...args) {
    return fn.apply(fn, args);
  };

  f.message = message;
  return f;
}
