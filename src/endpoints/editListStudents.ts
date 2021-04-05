import { Request, Response } from "express"
import updateListStudents from "../data/updateListStudents"

export default async function editListStudents(
    req:Request,
    res: Response
    ) {
    try {
        /* if (
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email === '' 
        ) {
            res.status(400).send({
                message: "Nenhum dos campos pode estar em branco"
            })
        } */

        if(!req.body.name && !req.body.nickname && !req.body.email) {
            res.status(400).send({
                message: "Escolha ao menos um valor para alterar"
            })
        }

        await updateListStudents(
            req.params.id,
            req.body.name
        )
        res.status(200).send({
            message: "Lista de estudantes atualizada com sucesso!"
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}