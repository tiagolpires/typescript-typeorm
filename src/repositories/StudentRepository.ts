import { EntityRepository, Repository } from 'typeorm'
import { Student } from '../models/Student'

@EntityRepository(Student)
export class StudentRepository extends Repository<Student>{
    public async findByName(name: string): Promise<any> {
        const student = await this.findOne({ where: { name }, relations: ['student'] })

        return student
    }
}