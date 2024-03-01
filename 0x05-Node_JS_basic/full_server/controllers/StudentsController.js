const readDatabase = require('../utils');
class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];
    readDatabase(path).then((fields) => {
      let ret = '';
      ret += 'This is the list of our students';

      Object.keys(fields).sort((a, b) => a.localeCompare(b)).forEach((field) => {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        ret += `\nNumber of students in ${field}: ${count}. List: ${list}`;
      });
      response.status(200).send(ret);
    })
      .catch((err) => {
        response.status(500).send(`This is the list of our students ${err.message}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major.replace(/:/g, '');
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    const path = process.argv[2];
    readDatabase(path)
      .then((fields) => {
        let ret = '';
        const list = fields[major].join(', ');
        ret += `List: ${list}`;
        response.status(200).send(ret);
      })
      .catch(() => {
        response.status(500).send("");
      });
  }
}

module.exports = StudentsController;
