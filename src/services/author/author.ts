import { getRepository } from "typeorm";
import { AuthorEntity } from "../../database/entities/AuthorEntity";

export const getPersonalInfo = async function(json) {
    const AuthorRepository = getRepository(AuthorEntity);

    const orcId = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_ORCID-ID']
    const lattesId = json['CURRICULO-VITAE']['@_NUMERO-IDENTIFICADOR']

    if (orcId){
        // AuthorRepository.find
    }

    let author = new AuthorEntity();

    author.name = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-COMPLETO']
    author.orcid = orcId
    author.institution = json['CURRICULO-VITAE']['DADOS-GERAIS']['ENDERECO']['ENDERECO-PROFISSIONAL']['@_NOME-INSTITUICAO-EMPRESA']
    author.lattesId = lattesId

    author = await AuthorRepository.save(author);

    return author.name
}