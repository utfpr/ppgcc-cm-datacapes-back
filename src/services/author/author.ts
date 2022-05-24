import { createCitationsFromAuthor } from "../citations/citations";
import { getManager, getRepository } from "typeorm";
import { AuthorEntity } from "../../database/entities/AuthorEntity";
import { CitationNameEntity } from "../../database/entities/CitationNameEntity";

export const getPersonalInfo = async function(json) {
    const AuthorRepository = getRepository(AuthorEntity);
    const citationNameRepository = getRepository(CitationNameEntity);

    let author = new AuthorEntity();

    author.name = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-COMPLETO'];
    author.orcid = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_ORCID-ID'];
    author.institution = json['CURRICULO-VITAE']['DADOS-GERAIS']['ENDERECO']['ENDERECO-PROFISSIONAL']['@_NOME-INSTITUICAO-EMPRESA'];
    author.lattesId = json['CURRICULO-VITAE']['@_NUMERO-IDENTIFICADOR'];

    author = AuthorRepository.create(author);

    await getManager().transaction(async manager => {
        author = await manager.save(author);
        
        let citationsName = createCitationsFromAuthor(json, author);

        await manager.save(CitationNameEntity, citationsName);
    }).catch(err => {
        console.log('ERRO: ', err)
    })
    
    console.log('Author save: ', author)
    return author;
}