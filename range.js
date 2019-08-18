function range(start = 0, stop, step) {
  if (stop === null) {
    stop = start || 0;
    start = 0;
  }

  if (!step) {
    step = stop < start ? -1 : 1;
  }

  let length = Math.max(Math.ceil((stop - start) / step), 0);
  const range = Array(length);

  for (let i = 0; i < length; i++, start += step) {
    range[i] = start;
  }

  return range;
}
