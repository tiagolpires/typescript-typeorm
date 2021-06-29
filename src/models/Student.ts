import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column()
    name: string
}