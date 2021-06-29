import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Seat } from '../models/Seat'

class SeatController {
    async index(req: Request, res: Response) {
        const seatRepo = getRepository(Seat)
        
        const seats = await seatRepo.find()

        res.json(seats)
    }

    async store(req: Request, res: Response) {
        const seatRepo = getRepository(Seat)  

        const { number } = req.body

        const seatExists = await seatRepo.findOne({ where: { number } })

        if(seatExists) res.status(409).json({error: 'Seat already exists'})

        const seat = seatRepo.create({ number })
        const seatData = await seatRepo.save(seat)
        res.json(seatData)
    }

    async delete(req: Request, res: Response) {
        const seatRepo = getRepository(Seat)  

        const { id } = req.params

        const seat = await seatRepo.findOne({ where: {id} })

        if(!seat) return res.status(404).json({error: 'Seat does not exist'})

        await seatRepo.remove(seat)

        res.json({sucess: true})
    }
}

export default new SeatController()