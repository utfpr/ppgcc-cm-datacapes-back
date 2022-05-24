import { AuthorEntity } from "../../database/entities/AuthorEntity";
import { CitationNameEntity } from "../../database/entities/CitationNameEntity";
import { getRepository } from "typeorm";

export const createCitationsFromAuthor = function(json, author: AuthorEntity) {
    const citationNameRepository = getRepository(CitationNameEntity);
    
    const citationNames = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-EM-CITACOES-BIBLIOGRAFICAS'].split(';')
    let citations: Array<CitationNameEntity> = []

    citationNames.forEach(name => {
        let citation = new CitationNameEntity();
        citation.name = name;
        citation.author = author;

        citations.push(citationNameRepository.create(citation));
    });

    console.log('Citations: ', citations);
    return citations;
}