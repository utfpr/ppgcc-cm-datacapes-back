import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AuthorEntity } from "./AuthorEntity";
@Entity('citation_names')
export class CitationNameEntity{
  @PrimaryColumn({name: 'id',type: 'uuid'})
  id: string
  @Column({name: 'author_id', type: 'uuid'})
  authorId:string
  @Column({name: 'name', type: 'varchar'})
  name: string

  @ManyToOne(() => AuthorEntity, (author) => author.citationNames)
  author: AuthorEntity
}

  
  
