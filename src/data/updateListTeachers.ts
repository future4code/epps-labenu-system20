import { connection } from "../index";

export default async function updateListTeachers(
    id: string,
    name: string
) {

    const listTeachers = await connection.raw(`
         SELECT list_responsible_teachers FROM labenu_system_class 
         WHERE id = '${id}';
    `)

    console.log(listTeachers[0])

    if (name) {
        let newListTeachers = `${listTeachers}, ${name}`

        await connection.raw(`
        UPDATE labenu_system_class
        SET list_responsible_teachers = '${name}'
        WHERE id = '${id}';
        `)
    }

   
}