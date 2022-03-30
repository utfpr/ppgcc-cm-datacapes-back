import {Column, Entity, PrimaryColumn } from "typeorm"

@Entity('conferences')
export class ConferenceEntity{

    @PrimaryColumn({name: 'id', type: 'uuid'})
    id: string
    @Column({name: 'acronym', type: 'varchar'})
    acronym: string
    @Column({name: 'title', type: 'varchar'})
    title: string
    @Column({name: 'international', type: 'boolean'})
    international: boolean
}