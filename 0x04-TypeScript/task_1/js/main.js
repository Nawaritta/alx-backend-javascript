// task 3: function interface
function printTeacher(firstName, lastName) {
    return firstName[0] + '. ' + lastName;
}
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
