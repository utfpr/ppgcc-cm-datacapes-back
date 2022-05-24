import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { AuthorEntity } from './AuthorEntity';
@Entity('citation_names')
export class CitationNameEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid', default: 'uuid_generate_v4()' })
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToOne(() => AuthorEntity, (author) => author.citationNames)
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity; 
}
