const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser({ explicitArray : false });

fs.readFile(__dirname + '/ISM.xml', function(err, data) {
  parser.parseString(data, function (error, result) {
    fs.writeFile(__dirname + '/ISM.json', JSON.stringify(result), function (errorOut) {
      if (err) return console.log(err);
    });
    console.log('Done');
  });
});
