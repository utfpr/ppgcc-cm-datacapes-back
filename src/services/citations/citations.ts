import { AuthorEntity } from "../../database/entities/AuthorEntity";
import { CitationNameEntity } from "../../database/entities/CitationNameEntity";
import { getRepository } from "typeorm";

export const criateCitationsFromAuthor = async function(json, author: AuthorEntity) {
    const citationNameRepository = getRepository(CitationNameEntity);
    
    const citationNames = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-EM-CITACOES-BIBLIOGRAFICAS'].split(';')
    let citations: Array<CitationNameEntity> 

    citationNames.forEach(name => {
        let citation = new CitationNameEntity();
        citation.authorId = author.id;
        citation.name = name;
        citation.author = author;

        citations.push(citation);
    });

    await citationNameRepository.save(citations);

    return author
}