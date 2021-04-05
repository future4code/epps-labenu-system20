import { connection } from "../index"

export default async function insertStudent(
    id: string,
    name: string,
    email: string,
    birth_date: string,
    hobbies: string,
) {
    await connection.insert({
        id,
        name,
        email,
        birth_date,
        hobbies
    }).into('labenu_system_estudents')
}