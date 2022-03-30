import { Column, PrimaryColumn } from "typeorm"

export class JournalPaperEntity{
    @PrimaryColumn({name: 'id',type: 'uuid'})
    id: string
    @Column({name: 'type',type: 'varchar'})
    type: string
    @Column({name: 'title',type: 'varchar'})
    title: string
    @Column({name: 'year',type: 'date'})
    year: string
    @Column({name: 'doi',type: 'varchar'})
    doi: string
    @Column({name: 'language',type: 'varchar'})
    language: string
    @Column({name: 'home_page',type: 'varchar'})
    homePage: string
    @Column({name: 'volume',type: 'varchar'})
    volume: string
    @Column({name: 'fascicle',type: 'varchar'})
    fascicle: string
    @Column({name: 'series',type: 'varchar'})
    series: string
    @Column({name: 'initial_page',type: 'varchar'})
    initialPage: string
    @Column({name: 'end_page',type: 'varchar'})
    endPage: string
    @Column({name: 'journal_id',type: 'uuid'})
    journalId: string
}

  