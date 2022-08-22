const pug = require('pug');
const fs = require('fs');

const pages = ["achievements", "courses", "events", "index", "meet-the-team", "placement-procedure"]

pages.forEach(page => {
  fs.writeFile('./dist/' + page + '.html', pug.renderFile('./src/pug/' + page + '.pug'), function (err,data) {
    if (err) {
      console.log(data);
      return console.log(err);
    } else {
      console.log('Pug compiled successfully: ' + page);
    }
  });
})
