import { connection } from "../index"

export default async function insertClass(
        id: string,
        name: string,
        startDate: string,
        endDate: string,
        listResponsibleTeachers: string,
        listStudents: string[],
        moduleClass: string[]
) {
    await connection.insert({
        id,
        name,
        start_date: startDate,
        end_date: endDate,
        list_responsible_teachers: listResponsibleTeachers,
        list_students: listStudents,
        module_class: moduleClass
    }).into('labenu_system_class')
}

/* CREATE TABLE labenu_system_class (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    list_responsible_teachers VARCHAR(1024),
    list_students VARCHAR(5000),
    module_class INT NOT NULL
);	
 */