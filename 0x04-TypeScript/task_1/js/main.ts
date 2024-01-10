//task 1: Teacher interface
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,

    [addAttribute: string]: any;
}

// task 2: Extend Teacher class
interface Directors extends Teacher {
    numberOfReports: number;
}

// task 3: function interface
function printTeacher(firstName:string, lastName:string):string{

    return firstName[0]+ '. ' + lastName;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// task 4: Class student
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface  {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentClassConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

