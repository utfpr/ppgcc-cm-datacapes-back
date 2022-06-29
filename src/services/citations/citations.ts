import { AuthorEntity } from "../../database/entities/AuthorEntity";
import { CitationNameEntity } from "../../database/entities/CitationNameEntity";
import { getRepository } from "typeorm";

export class CitationService {
    static findOrPopulate = async function(citationNames: string[], author: AuthorEntity) {
        
        let citationNameRepository = getRepository(CitationNameEntity);
        let citations: Array<CitationNameEntity> = []
    
        for (const name of citationNames) {
            let citationFound = await citationNameRepository.findOne({
                where: { name: name, author: author },
                relations: ['author']
            });
    
            if (!citationFound) {
                let citation = new CitationNameEntity();
                citation.name = name;
                citation.author = author;
        
                citations.push(citation);
            } else {
                citations.push(citationFound);
            }
        }
    
        return citations;
    }

}
