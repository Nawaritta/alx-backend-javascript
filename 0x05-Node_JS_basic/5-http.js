//small HTTP server using the http module

const fs = require('fs');
const http = require('http');
const port = 1245;

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const url = req.url;

    switch (url) {
    case '/':
        res.end('Hello Holberton School!');
        break;
    case '/students':
	const path = process.argv[2];
	countStudents(path)
	    .then((output) => {
		res.end(output);
	    })
            .catch((error) => {
		console.log(error);
	    });
        break;
    }
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
