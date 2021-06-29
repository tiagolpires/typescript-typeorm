import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('notebooks')
export class Notebook {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number

    @Column()
    name: string
}