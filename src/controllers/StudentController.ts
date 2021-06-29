import { Request, Response } from 'express'
import { getRepository, getCustomRepository } from 'typeorm'
import { Student } from '../models/Student'
import { StudentRepository } from '../repositories/StudentRepository'

class StudentController {
    async index(req: Request, res: Response) {
        const studentRepo = getRepository(Student)
        
        const students = await studentRepo.find()

        res.json(students)
    }

    async store(req: Request, res: Response) {
        const studentRepo = getRepository(Student)  

        const { name } = req.body

        const studentExists = await studentRepo.findOne({ where: { name } })

        if(studentExists) res.status(409).json({error: 'Student already exists'})

        const student = studentRepo.create({ name })
        const studentData = await studentRepo.save(student)
        res.json(studentData)
    }

    async findByname(req: Request, res: Response) {
        const studentRepo = getCustomRepository(StudentRepository)  

        const { name } = req.body

        const student = await studentRepo.findByName(name)

        if(!student) res.status(404).json({error: 'Student does not exist'})
    
        res.json(student)
    }

    async delete(req: Request, res: Response) {
        const studentRepo = getRepository(Student)  

        const { id } = req.params

        const student = await studentRepo.findOne({ where: {id} })

        if(!student) return res.status(404).json({error: 'Student does not exist'})

        await studentRepo.remove(student)

        res.json({sucess: true})
    }
}

export default new StudentController()