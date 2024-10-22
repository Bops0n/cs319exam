export class Student{
    name: string;
    age: number;
    grades: number[] = [];

    private static count: number = 0;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        Student.count++;

    }

    addGrade(grade: number){
        this.grades.push(grade);
    }

    getAverageGrade(){
        let avg: number = 0;
        this.grades.map(grade => avg += grade)

        return avg/this.grades.length;
    }

    getGrades(){
        return this.grades
    }

    getName(){
        return this.name
    }

    // return times of class used
    public static getCount(): number{
        return Student.count;
    }
    
}