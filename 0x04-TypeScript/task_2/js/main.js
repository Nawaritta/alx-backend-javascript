"use strict";
// task 5: Advanced types Part 1
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getCoffeeBreak = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return "Cannot work from home"; };
        this.getCoffeeBreak = function () { return "Cannot have a break"; };
        this.workTeacherTasks = function () { return "Getting to work"; };
    }
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
exports.createEmployee = createEmployee;
// task 6: Creating functions specific to employees
function isDirector(employee) {
    return employee instanceof Director;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return "Teaching Math";
    }
    return "Teaching History";
}
exports.teachClass = teachClass;
