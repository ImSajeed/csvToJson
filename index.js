const AdmZip = require('adm-zip')
const fs = require('fs');
const CSVToJSON = require('csvtojson');
 
function readData (folder) {
  fs.readdirSync(folder).forEach(file => {
    console.log(file);
    convertCSVDataToJson(folder + '/' + file);
  });
}

function convertCSVDataToJson(file) {
  CSVToJSON().fromFile(file)
    .then(users => {
        console.log(JSON.stringify(users));
    }).catch(err => {
        console.log(err);
    });
}

function main(source, destination) {
  var zip = new AdmZip(source);
  zip.extractAllTo(destination, true);
  readData(source.split('.')[0]);
}

main("/users/Downloads/testzip.zip", "/users/Downloads/");


