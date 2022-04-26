import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { AuthorEntity } from './AuthorEntity'
import { ConferenceEntity } from './ConferenceEntity'

@Entity('conference_paper_author')
export class ConferencePaperAuthorEntity {
  @PrimaryColumn({ name: 'author_id', type: 'uuid' })
  authorId: string
  @PrimaryColumn({ name: 'conference_id', type: 'uuid' })
  conferenceId: string
  @Column({ name: 'authorship_order', type: 'integer' })
  authorShipOrder: number
  @Column({ name: 'role', type: 'integer' })
  role: number
  @ManyToOne(() => AuthorEntity, (author) => author.authorConferencePapers)
  author: AuthorEntity
  @ManyToOne(() => ConferenceEntity, (conference) => conference.authorConferencePapers)
  conference: ConferenceEntity
}
