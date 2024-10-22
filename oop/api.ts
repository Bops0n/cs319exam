import { Student } from "./Student";

interface stdt {
    name: string;
    age: number;
    grades: number[]
}

async function fetchStudentData(student: Student){  
    const apiSimulation = new Promise<stdt>((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: student.getName(), age: student.age, grades: student.getGrades()});
        }, 2000);
    });

    const data = await apiSimulation

    return data

}

async function tryFetch(){
    const s = new Student('test', 10);
    s.addGrade(10)
    s.addGrade(10)
    const test = fetchStudentData(s);
    const test1 = await fetchStudentData(s);
    console.log(test)
    console.log(test1)
}

tryFetch()
