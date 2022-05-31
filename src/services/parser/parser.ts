import fs from 'fs';
import { getAuthor } from "../author/author"
import { XMLParser } from "fast-xml-parser"
import { getCitations } from 'services/citations/citations';
import { AuthorEntity } from 'database/entities/AuthorEntity';

let options = {
    ignoreAttributes : false,
    ignoreNameSpace : false,
    allowBooleanAttributes : true,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
};

export const executeFile = async function(file: Buffer) {
    
    // cria o parser xml com as opções
    const parser = new XMLParser(options)
    const result = parser.parse(file)
    
    let author = new AuthorEntity();
    author.lattesId = result['CURRICULO-VITAE']['@_NUMERO-IDENTIFICADOR'];
    author.name = result['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-COMPLETO'];
    author.orcid = result['CURRICULO-VITAE']['DADOS-GERAIS']['@_ORCID-ID'];
    author.institution = result['CURRICULO-VITAE']['DADOS-GERAIS']['ENDERECO']['ENDERECO-PROFISSIONAL']['@_NOME-INSTITUICAO-EMPRESA'];

    // retorna o author
    author = await getAuthor(author);

    const citationsNames = result['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-EM-CITACOES-BIBLIOGRAFICAS'].split(';')
    let authorCitationsName = getCitations(citationsNames, author);

    return author.name;
};