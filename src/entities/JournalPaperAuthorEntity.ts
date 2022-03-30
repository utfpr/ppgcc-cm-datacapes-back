import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { AuthorEntity } from "./AuthorEntity"
import { JournalPaperEntity } from "./JournalPaperEntity"


@Entity('journal_paper_author')
export class JournalPaperAuthorEntity{
    
    @PrimaryColumn({name: 'author_id',type: 'uuid'})
    authorId: string
    
    @PrimaryColumn({name: 'conference_id',type: 'uuid'})
    journalId: string
    
    @Column({name: 'authorship_order',type: 'integer'})
    authorShipOrder: number

    @ManyToOne(() => JournalPaperEntity, (journal) => journal.JournalAuthorPapers)
    journalPaper: JournalPaperEntity
    @ManyToOne(() => AuthorEntity, (author) => author.JournalAuthorPapers)
    author: AuthorEntity
}
