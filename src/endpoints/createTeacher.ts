import { Request, Response } from 'express';
import insertUser from "../data/insertTeacher";

export default async function createTeacher(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name || 
            !req.body.email || 
            !req.body.birthDate || 
            !req.body.specialties
        ) {
            res
                .status(400)
                .send('Preencha os campos "name", "email", "birthDate" e "specialties"')
        }
        const id: string = Date.now() + Math.random().toString()
 
        await insertUser(
            id,
            req.body.name,
            req.body.email,
            req.body.birthDate,
            req.body.specialties
        )

        res
        .status(200)
        .send('Professor criado com sucesso!')
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

 