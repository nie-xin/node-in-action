var args = process.argv.slice(2);
var sum = 0;

sum = args.reduce(function(pre, cur) {
  return Number(pre) + Number(cur);
}, sum);

console.log(sum);
