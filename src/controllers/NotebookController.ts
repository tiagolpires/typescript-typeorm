import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Notebook } from '../models/Notebook'

class notebookController {
    async index(req: Request, res: Response) {
        const notebookRepo = getRepository(Notebook)
        
        const notebooks = await notebookRepo.find({ relations: ['student'] })

        res.json(notebooks)
    }

    async store(req: Request, res: Response) {
        const notebookRepo = getRepository(Notebook)  

        const { name, studentId } = req.body

        const notebookExists = await notebookRepo.findOne({ where: { name } })

        if(notebookExists) res.status(409).json({error: 'notebook already exists'})

        const notebook = notebookRepo.create({ name, student: studentId })
        const notebookData = await notebookRepo.save(notebook)
        res.json(notebookData)
    }

    async delete(req: Request, res: Response) {
        const notebookRepo = getRepository(Notebook)  

        const { id } = req.params

        const notebook = await notebookRepo.findOne({ where: {id} })

        if(!notebook) return res.status(404).json({error: 'notebook does not exist'})

        await notebookRepo.remove(notebook)

        res.json({sucess: true})
    }
}

export default new notebookController()