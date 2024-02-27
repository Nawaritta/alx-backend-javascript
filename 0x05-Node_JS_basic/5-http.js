// small HTTP server using the http module

const http = require('http');

const port = 1245;
const fs = require('fs').promises;

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data
          .trim()
          .split('\n')
          .filter((line) => line.trim() !== '');
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
        ret += `Number of students: ${totalStudents}`;
        // eslint-disable-next-line guard-for-in
        for (const field in fields) {
          const count = fields[field].length;
          const list = fields[field].join(', ');
          ret += `\nNumber of students in ${field}: ${count}. List: ${list}`;
        }
        resolve(ret);
      })
      .catch(() => {
        reject(new Error('CCannot load the database'));
      });
  });
}
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  }
  else if (url === '/students') {
    const path = process.argv[2];
    countStudents(path)
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error}`);
      });
  }

});

app.listen(port);
module.exports = app;
