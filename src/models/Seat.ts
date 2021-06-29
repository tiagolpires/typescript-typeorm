import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('seats')
export class Seat {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column()
    number: number
}