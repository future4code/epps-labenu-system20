import { connection } from "../index"

export default async function insertTeacher(
    id: string,
    name: string,
    email: string,
    birth_date: string,
    specialties: string,
) {
    await connection.insert({
        id,
        name,
        email,
        birth_date,
        specialties
    }).into('labenu_system_teachers')
}