// countStudents function synchronously

const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
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

        console.log(`Number of students: ${totalStudents}`);
        for (const field in fields) {
            const count = fields[field].length;
            const list = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
