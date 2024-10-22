import { Student } from "./Student";

function parseJSONData(jsonData: string): Student | string {
    try {
        const studentData: Student = JSON.parse(jsonData);
        return studentData;
    } catch (error) {
        return `Error parsing JSON data: ${(error as Error).message}`;
    }
}
