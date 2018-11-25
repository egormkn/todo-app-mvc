import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { List } from './list.entity'

@Entity('task', {
  orderBy: {
    id: 'ASC'
  }
})
export class Task {

  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 255 })
  public title: string

  @Column()
  public description: string

  @Column('boolean')
  public isDone: boolean

  @ManyToOne(type => List, list => list.tasks)
  public list: List

  @CreateDateColumn()
  public createdDate: Date
}
