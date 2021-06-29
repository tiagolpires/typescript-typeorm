import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('classes')
export class Class {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column()
    name: string
}