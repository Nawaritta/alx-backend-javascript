// small HTTP server using Express module

const express = require('express');
const port = 1245;
const app = express();
const path = process.argv[2];
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    countStudents(path)
        .then((output) => {
            res.send(output);
        })
        .catch((error) => {
            console.error(error);
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

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n').filter(line => line.trim() !== '');
            const students = lines.slice(1).map(line => line.split(','));

            const fields = {};
            let totalStudents = 0;

            for (const student of students) {
                const [firstname, lastname, age, field] = student;
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
                totalStudents++;
            }
            let ret = ''
            ret += 'This is the list of our students\n';
            ret += `Number of students: ${totalStudents}`;
            for (const field in fields) {
                const count = fields[field].length;
                const list = fields[field].join(', ');
                ret += `Number of students in ${field}: ${count}. List: ${list}`;
            }

            resolve(ret);
        });
    });
}

app.listen(port);
module.exports = app;
