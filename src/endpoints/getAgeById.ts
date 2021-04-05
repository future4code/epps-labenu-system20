import selectById from "../data/selectStudent";
import { Request, Response } from 'express';

export default async function getUserById(
    req: Request,
    res: Response
) {
    try {
        const user = await selectById(req.params.id)

        if(!user){
            res.status(404).send({
                message: "Estudante não encontrado"
            })
        }

        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}