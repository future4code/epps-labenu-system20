import { Request, Response } from 'express';
import insertUser from "../data/insertStudent";

export default async function createStudent(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name || 
            !req.body.email || 
            !req.body.birthDate || 
            !req.body.hobbies
        ) {
            res
                .status(400)
                .send('Preencha os campos "name", "email", "birthDate" e "hobbies"')
        }
        const id: string = Date.now() + Math.random().toString()
 
        await insertUser(
            id,
            req.body.name,
            req.body.email,
            req.body.birthDate,
            req.body.hobbies
        )

        res
        .status(200)
        .send('Estudante criado com sucesso!')
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

 
