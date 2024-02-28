// readDatabase function asynchronously
const fs = require('fs').promises;

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1).map((line) => line.split(','));

        const fields = {};

        for (const student of students) {
          const [firstname, , , field] = student;
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
        resolve(fields);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}
module.exports = readDatabase;
