import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Task } from './task.entity'

@Entity('list', {
  orderBy: {
    id: 'ASC'
  }
})
export class List {

  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 255 })
  public title: string

  @OneToMany(type => Task, task => task.list, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  public tasks: Task[]
}
