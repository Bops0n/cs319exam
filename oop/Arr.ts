import { Student } from "./Student";

const students : Student[] = []

const s1 : Student = new Student('n1', 10)
const s2 : Student = new Student('n2', 10)
const s3 : Student = new Student('n3', 10)

s1.addGrade(70)
s2.addGrade(75)
s3.addGrade(80)
s3.addGrade(80)
for(let i of [s1, s2, s3]){
    students.push(i)
}

const topStudents = students.filter(student => student.getAverageGrade() >= 75);
console.log("Top Students:", topStudents);

const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

const totalGrades = students.reduce((total, student) => total + student.grades.length, 0);
console.log("Total Number of Grades:", totalGrades);