"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Person_1 = require("./Person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.students = [];
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Teacher.prototype.assignGrades = function (student, grade) {
        student.addGrade(grade);
    };
    return Teacher;
}(Person_1.Person));
var k = new Teacher('teacher', 10, 'subject test');
var s1 = new Student_1.Student('s1', 10);
k.addStudent(s1);
k.assignGrades(s1, 5);
k.assignGrades(s1, 0);
console.log(s1.getAverageGrade());
