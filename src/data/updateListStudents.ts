import { connection } from "../index";

export default async function updateListStudents(
    id: string,
    name: string
) {

    const listStudents = await connection.raw(`
         SELECT list_students FROM labenu_system_class 
         WHERE id = '${id}';
    `)

    console.log(listStudents[0])

    if (name) {
        let newListStudents = `${listStudents}, ${name}`

        await connection.raw(`
        UPDATE labenu_system_class
        SET list_students = '${name}'
        WHERE id = '${id}';
        `)
    }

   
}