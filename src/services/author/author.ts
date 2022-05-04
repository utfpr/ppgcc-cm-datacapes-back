import { getRepository } from "typeorm";
import { AuthorEntity } from "../../database/entities/AuthorEntity";

export const getPersonalInfo = async function(json) {
    let author = new AuthorEntity();

    author.name = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-COMPLETO']
    author.orcid = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_ORCID-ID']
    author.institution = json['CURRICULO-VITAE']['DADOS-GERAIS']['ENDERECO']['ENDERECO-PROFISSIONAL']['@_NOME-INSTITUICAO-EMPRESA']
    author.lattesId = json['CURRICULO-VITAE']['@_NUMERO-IDENTIFICADOR']

    author = await getRepository(AuthorEntity).save(author);
    console.log(author.name);

    return author.name
}