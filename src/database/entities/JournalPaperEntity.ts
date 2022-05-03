import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { JournalPaperAuthorEntity } from './JournalPaperAuthorEntity'

@Entity('journal_papers')
export class JournalPaperEntity {
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

  @Column({ name: 'number', type: 'varchar' })
  number: string

  @Column({ name: 'series', type: 'varchar' })
  series: string

  @Column({ name: 'initial_page', type: 'varchar' })
  initialPage: string

  @Column({ name: 'final_page', type: 'varchar' })
  finalPage: string

  @Column({ name: 'journal_id', type: 'uuid' })
  journalId: string

  @OneToMany(() => JournalPaperAuthorEntity, (journalPaperAuthorEntity) => journalPaperAuthorEntity.journalPaper)
  JournalAuthorPapers: Array<JournalPaperAuthorEntity>
}
