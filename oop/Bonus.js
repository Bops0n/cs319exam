"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
function createBonusAdder(bonus) {
    return function (grade) {
        return grade + bonus;
    };
}
function apply(bonus, student) {
    var addBonus = createBonusAdder(bonus);
    student.grades = student.grades.map(function (grade) { return grade += bonus; });
}
var k = new Student_1.Student('t', 10);
k.addGrade(10);
k.addGrade(10);
k.addGrade(10);
apply(5, k);
console.log(k.getGrades());
