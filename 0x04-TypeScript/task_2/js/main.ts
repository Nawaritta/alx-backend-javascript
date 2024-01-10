// task 5: Advanced types Part 1

interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

export class Director implements DirectorInterface {
    workFromHome = () => 'Working from home';
    getCoffeeBreak = () => 'Getting a coffee break';
    workDirectorTasks = () => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
    workFromHome = () => "Cannot work from home";
    getCoffeeBreak = () => "Cannot have a break";
    workTeacherTasks = () => "Getting to work";
}

export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// task 6: Creating functions specific to employees
export function isDirector(employee: Director | Teacher): boolean {
    return employee instanceof Director;
}

export function executeWork(employee: any): string {
    return isDirector(employee)? employee.workDirectorTasks(): employee.workTeacherTasks();
}

// task 7: String literal types

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math'){
        return "Teaching Math";
    }
    return  "Teaching History";
}
