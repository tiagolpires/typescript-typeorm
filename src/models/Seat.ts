import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { Student } from './Student'

@Entity('seats')
export class Seat {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column()
    number: number

    @OneToOne(() => Student, student => student.seat)
    student: Student
}