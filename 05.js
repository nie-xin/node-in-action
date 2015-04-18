var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, files) {
  if (err) throw err;

  var filtered = files.filter(function(file) {
    return path.extname(file).slice(1) === ext;
  }, ext);
  filtered.forEach(function(file) {
    console.log(file);
  })
});
