import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { ConferenceEntity } from './ConferenceEntity'
import { ConferencePaperEntity } from './ConferencePaperEntity'
import { PublisherEntity } from './PublisherEntity'
@Entity('conference_editions')
export class ConferenceEditionEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: string

  // TITULO-DOS-ANAIS-OU-PROCEEDINGS
  @Column({ name: 'title', type: 'varchar' })
  title: string

  @Column({ name: 'year', type: 'date' })
  year: string

  @Column({ name: 'location', type: 'varchar' })
  location: string

  @Column({ name: 'country', type: 'varchar' })
  country: string

  @Column({ name: 'isbn', type: 'varchar' })
  isbn: string

  @Column({ name: 'isbn', type: 'varchar' })
  eIsbn: string

  @Column({ name: 'conference_id', type: 'uuid' })
  conferenceId: string

  @Column({ name: 'publisher_id', type: 'uuid' })
  publisherId: string

  @ManyToOne(() => ConferenceEntity, (conference) => conference.editions)
  conference: ConferenceEntity

  @ManyToOne(() => ConferenceEntity, (conference) => conference.editions)
  publisher: PublisherEntity

  @OneToMany(() => ConferencePaperEntity, (conferencePaper) => conferencePaper.conference)
  conferencePapers: Array<ConferencePaperEntity>
}
