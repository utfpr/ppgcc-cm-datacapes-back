import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { CitationNameEntity } from "./CitationNameEntity";
import { ConferencePaperAuthorEntity } from "./ConferencePaperAuthorEntity";
import { JournalPaperAuthorEntity } from "./JournalPaperAuthorEntity";

@Entity('authors')
export class AuthorEntity{
    @PrimaryColumn({name:'id' , type: 'uuid' })
    id: string
    @Column({name:'name' , type: 'varchar' })
    name: string
    @Column({name:'institution' , type: 'varchar' })
    institution: string

    @OneToMany(() => CitationNameEntity, (citationName) => citationName.author)
    citationNames: Array<CitationNameEntity>

    @OneToMany(() => ConferencePaperAuthorEntity, (authorConferencePaper) => authorConferencePaper.author)
    authorConferencePapers: Array<ConferencePaperAuthorEntity>

    @OneToMany(() => JournalPaperAuthorEntity, (journalPaperAuthorEntity) => journalPaperAuthorEntity.author)
    JournalAuthorPapers:Array<JournalPaperAuthorEntity>
}
