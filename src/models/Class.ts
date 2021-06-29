import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import { Student } from './Student'

@Entity('classes')
export class Class {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column()
    name: string

    @ManyToMany(() => Student, student => student.classes)
    students: Student
}