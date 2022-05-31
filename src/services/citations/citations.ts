import { AuthorEntity } from "../../database/entities/AuthorEntity";
import { CitationNameEntity } from "../../database/entities/CitationNameEntity";
import { getRepository } from "typeorm";

export const getCitations = function(citationNames: string[], author: AuthorEntity) {
    const citationNameRepository = getRepository(CitationNameEntity);
    
    let citations: Array<CitationNameEntity> = []

    citationNames.forEach(async (name) => {
        let citationFound = await citationNameRepository.findOne({ author: author, name: name});

        let citation = new CitationNameEntity();
        citation.name = name;
        citation.author = author;

        citations.push(citationNameRepository.create(citation));
    });

    console.log('Citations: ', citations);
    return citations;
}