import { Student } from "./Student";
import { Person } from "./Person";
class Teacher extends Person {
    subject: string;
    students: Student[] = [];

    constructor(name:string, age: number, subject : string){
        super(name,age)
        this.subject = subject
    }

    addStudent(student: Student): void{
        this.students.push(student);
    }
    assignGrades(student: Student, grade: number): void{
        student.addGrade(grade);
    }
}

const k = new Teacher('teacher', 10, 'subject test')
const s1 = new Student('s1', 10)

k.addStudent(s1)

k.assignGrades(s1,5)
k.assignGrades(s1,0)

console.log(s1.getAverageGrade())