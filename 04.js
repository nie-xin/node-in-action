var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
  if (err) throw err;

  var nbOfNewline = data.toString().split('\n').length - 1;
  console.log(nbOfNewline);
});
