import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'publishers' })
export class PublisherEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: string

  @Column({ name: 'name', type: 'character varying' })
  name: string

  @Column({ name: 'address', type: 'character varying' })
  address: string
}
