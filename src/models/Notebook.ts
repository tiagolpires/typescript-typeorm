import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Student } from './Student'

@Entity('notebooks')
export class Notebook {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column()
    name: string

    @ManyToOne(() => Student, student => student.notebooks)
    student: Student
}