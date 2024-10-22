import { Student } from "./Student";

function createBonusAdder(bonus: number) {
    return function(grade: number): number {
        return grade + bonus;
    };
}

function apply(bonus : number, student: Student): void{
    const addBonus = createBonusAdder(bonus)
    student.grades = student.grades.map(grade => grade += bonus)
}
