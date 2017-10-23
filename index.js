const fs = require('file-system');
const date = new Date();

fs.writeFile('randomFolder/test.txt', date.toLocaleString(), err => {
    if (err) throw err;
    console.log('The file has been saved!');
});