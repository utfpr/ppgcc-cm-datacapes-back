import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'role' })
export class RoleEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: number
  @Column({ name: 'name', type: 'character varying' })
  name: string
}
