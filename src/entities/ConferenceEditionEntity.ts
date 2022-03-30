import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { ConferenceEntity } from "./ConferenceEntity"
import { ConferencePaperEntity } from "./ConferencePaperEntity"
@Entity('conference_editions')
export class ConferenceEditionEntity{
    @PrimaryColumn({name: 'id',type: 'uuid'}) 
    id: string
    
    @Column({name: 'title',type: 'varchar'}) 
    title: string
    
    @Column({name: 'year',type: 'date'}) 
    year: string
    
    @Column({name: 'location',type: 'varchar'})
    location: string
    
    @Column({name: 'country',type: 'varchar'}) 
    country: string
    
    @Column({name: 'isbn',type: 'varchar'}) 
    isbn: string
    
    @Column({name: 'publisher_company_name',type: 'varchar'})
    publisherCompanyName: string
    
    @Column({name: 'publisher_company_city',type: 'varchar'})
    publisherCompanyCity: string
    
    @Column({name: 'conference_id',type: 'uuid'})
    conferenceId: string

    @ManyToOne(() => ConferenceEntity, (conference) => conference.editions)
    conference: ConferenceEntity

    @OneToMany(() => ConferencePaperEntity, (conferencePaper) => conferencePaper.conference)
    conferencePapers: Array<ConferencePaperEntity>
}