"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var students = [];
var s1 = new Student_1.Student('n1', 10);
var s2 = new Student_1.Student('n2', 10);
var s3 = new Student_1.Student('n3', 10);
s1.addGrade(70);
s2.addGrade(75);
s3.addGrade(80);
s3.addGrade(80);
for (var _i = 0, _a = [s1, s2, s3]; _i < _a.length; _i++) {
    var i = _a[_i];
    students.push(i);
}
var topStudents = students.filter(function (student) { return student.getAverageGrade() >= 75; });
console.log("Top Students:", topStudents);
var studentNames = students.map(function (student) { return student.name; });
console.log("Student Names:", studentNames);
var totalGrades = students.reduce(function (total, student) { return total + student.grades.length; }, 0);
console.log("Total Number of Grades:", totalGrades);
