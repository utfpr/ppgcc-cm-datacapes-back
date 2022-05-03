import { AuthorEntity } from "../../database/entities/AuthorEntity";

export const getPersonalInfo = function(json) {
    let author = new AuthorEntity();

    author.name = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-COMPLETO']
    author.orcid = json['CURRICULO-VITAE']['DADOS-GERAIS']['@_ORCID-ID']
    author.institution = json['CURRICULO-VITAE']['DADOS-GERAIS']['ENDERECO']['ENDERECO-PROFISSIONAL']['@_NOME-INSTITUICAO-EMPRESA']
    
    return json['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-COMPLETO']
}