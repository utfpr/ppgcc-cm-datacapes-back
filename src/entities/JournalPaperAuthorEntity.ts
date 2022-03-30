import { Column, PrimaryColumn } from "typeorm"

export class JournalPaperAuthorEntity{
    @PrimaryColumn({name: 'author_id',type: 'uuid'})
    authorId: string
    @PrimaryColumn({name: 'conference_id',type: 'uuid'})
    journalId: string
    @Column({name: 'authorship_order',type: 'integer'})
    authorShipOrder: number
}
