const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

function routes(app){
    app.get('/', AppController.getHomepage);
    app.get('/students', StudentsController.getAllStudents);
    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}
export default routes;