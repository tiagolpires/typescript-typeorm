import { EntityRepository, Repository } from 'typeorm'
import { Student } from '../models/Student'

@EntityRepository(Student)
export class StudentRepository extends Repository<Student>{
    public async findByName(name: string): Promise<Student> {
        const student = await this.findOne({ where: { name } })

        return student
    }
}