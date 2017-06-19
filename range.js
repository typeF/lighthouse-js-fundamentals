function range(start, end, step)
{
  var num = [start];
  while (start < end)
  {
    start += step;
    num.push(start);
  }
  return num;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));