import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { ConferenceEditionEntity } from './ConferenceEditionEntity'
import { ConferencePaperAuthorEntity } from './ConferencePaperAuthorEntity'

@Entity('conferences')
export class ConferenceEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: string
  @Column({ name: 'acronym', type: 'varchar' })
  acronym: string
  @Column({ name: 'title', type: 'varchar' })
  title: string
  @Column({ name: 'scopeId', type: 'integer' })
  scope: number

  @OneToMany(() => ConferenceEditionEntity, (edition) => edition.conference)
  editions: Array<ConferenceEditionEntity>

  @OneToMany(() => ConferencePaperAuthorEntity, (authorConferencePaper) => authorConferencePaper.conference)
  authorConferencePapers: Array<ConferencePaperAuthorEntity>
}
