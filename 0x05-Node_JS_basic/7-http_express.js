// small HTTP server using Express module

const express = require('express');

const port = 1245;
const app = express();
const path = process.argv[2];
const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));

      const fields = {};
      let totalStudents = 0;

      for (const student of students) {
        const [firstname, , , field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
        totalStudents += 1;
      }
      let ret = '';
      ret += 'This is the list of our students\n';
      ret += `Number of students: ${totalStudents}\n`;
      // eslint-disable-next-line guard-for-in
      for (const field in fields) {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        ret += `Number of students in ${field}: ${count}. List: ${list}\n`;
      }

      resolve(ret.slice(0, -1));
    });
  });
}

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(path)
    .then((output) => {
      res.send(output);
    })
    .catch((error) => {
      res.end(`This is the list of our students\n${error.message}`);
    });
});

app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET ${req.url}</pre>
    </body>
    </html>`);
});

app.listen(port);
module.exports = app;
