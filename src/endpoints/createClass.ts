import { Request, Response } from 'express';
import insertClass from "../data/insertClass";

export default async function createClass(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name || 
            !req.body.startDate || 
            !req.body.endDate /* || 
            !req.body.listResponsibleTeachers */
        ) {
            res
                .status(400)
                .send('Preencha os campos "name", "startDate", "endDate" e "listResponsibleTeachers"')
        }
        const id: string = Date.now() + Math.random().toString()
 
        await insertClass(
            id,
            req.body.name,
            req.body.startDate,
            req.body.endDate,
            req.body.listResponsibleTeachers,
            req.body.listStudents,
            req.body.moduleClass
            
        )

        res
        .status(200)
        .send('Turma criada com sucesso!')
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}


