import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity('journals')
export class CitationNameEntity{
    @PrimaryColumn({name: 'id', type: 'uuid'})
    id: number    
    
    @Column({name: 'title', type: 'varchar'})    
    title: string
    
    @Column({name: 'issn', type: 'varchar'})    
    issn: string
    
    @Column({name: 'location', type: 'varchar'})    
    location: string
    
    @Column({name: 'country', type: 'varchar'})    
    country: string
}


  
  
