"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.grades = [];
        this.name = name;
        this.age = age;
        Student.count++;
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.getAverageGrade = function () {
        var avg = 0;
        this.grades.map(function (grade) { return avg += grade; });
        return avg / this.grades.length;
    };
    Student.prototype.getGrades = function () {
        return this.grades;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    // return times of class used
    Student.getCount = function () {
        return Student.count;
    };
    Student.count = 0;
    return Student;
}());
exports.Student = Student;
