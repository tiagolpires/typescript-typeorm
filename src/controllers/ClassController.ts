import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Class } from '../models/Class'

class classController {
    async index(req: Request, res: Response) {
        const classRepo = getRepository(Class)
        
        const classData = await classRepo.find({ relations: ['students'] })

        res.json(classData)
    }

    async store(req: Request, res: Response) {
        const classRepo = getRepository(Class)  

        const { name } = req.body

        const classExists = await classRepo.findOne({ where: { name } })

        if(classExists) res.status(409).json({error: 'class already exists'})

        const classEnitity = classRepo.create({ name })
        const classData = await classRepo.save(classEnitity)
        res.json(classData)
    }

    async delete(req: Request, res: Response) {
        const classRepo = getRepository(Class)  

        const { id } = req.params

        const classData = await classRepo.findOne({ where: {id} })

        if(!classData) return res.status(404).json({error: 'class does not exist'})

        await classRepo.remove(classData)

        res.json({sucess: true})
    }
}

export default new classController()