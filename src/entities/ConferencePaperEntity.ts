import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { ConferenceEditionEntity } from './ConferenceEditionEntity'

@Entity('conference_papers')
export class ConferencePaperEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: string

  @Column({ name: 'type', type: 'varchar' })
  type: string

  @Column({ name: 'title', type: 'varchar' })
  title: string

  @Column({ name: 'year', type: 'date' })
  year: string

  @Column({ name: 'doi', type: 'varchar' })
  doi: string

  @Column({ name: 'language', type: 'varchar' })
  language: string

  @Column({ name: 'volume', type: 'varchar' })
  volume: string

  @Column({ name: 'series', type: 'varchar' })
  series: string

  @Column({ name: 'initial_page', type: 'varchar' })
  initialPage: string

  @Column({ name: 'final_page', type: 'varchar' })
  finalPage: string

  @Column({ name: 'conference_edition_id', type: 'uuid' })
  conferenceEditionId: string

  @ManyToOne(() => ConferenceEditionEntity, (conferenceEdition) => conferenceEdition.conferencePapers)
  conference: ConferenceEditionEntity
}
