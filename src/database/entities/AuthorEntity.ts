import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { CitationNameEntity } from './CitationNameEntity'
import { ConferencePaperAuthorEntity } from './ConferencePaperAuthorEntity'
import { JournalPaperAuthorEntity } from './JournalPaperAuthorEntity'

@Entity('authors')
export class AuthorEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid', default: 'uuid_generate_v4()' })
  id: string

  @Column({ name: 'orcid', type: 'varchar', nullable: true, unique: true })
  orcid: string

  @Column({ name: 'lattes_id', type: 'varchar', nullable: false, unique: true })
  lattesId: string

  @Column({ name: 'name', type: 'varchar' })
  name: string

  @Column({ name: 'institution', type: 'varchar' })
  institution: string

  @OneToMany(() => CitationNameEntity, (citationName) => citationName.author)
  citationNames: Array<CitationNameEntity>

  @OneToMany(() => ConferencePaperAuthorEntity, (authorConferencePaper) => authorConferencePaper.author)
  authorConferencePapers: Array<ConferencePaperAuthorEntity>

  @OneToMany(() => JournalPaperAuthorEntity, (journalPaperAuthorEntity) => journalPaperAuthorEntity.author)
  JournalAuthorPapers: Array<JournalPaperAuthorEntity>
}
