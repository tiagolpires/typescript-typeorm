import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, JoinTable, ManyToMany } from 'typeorm'
import { Seat } from './Seat'
import { Notebook } from './Notebook'
import { Class } from './Class'

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column()
    name: string

    @OneToOne(() => Seat, seat => seat.student)
    @JoinColumn()
    seat: Seat

    @OneToMany(() => Notebook, notebook => notebook.student)
    notebooks: Notebook[]

    @ManyToMany(() => Class, classEntity => classEntity.students)
    @JoinTable()
    classes: Class
}