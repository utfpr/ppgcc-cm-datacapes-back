import fs from 'fs';
import { AuthorService } from "../author/author"
import { XMLParser } from "fast-xml-parser"
import { CitationService } from '../citations/citations';
import { AuthorEntity } from '../../database/entities/AuthorEntity';
import { getRepository } from 'typeorm';

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
    author = await AuthorService.findOrPopulate(author);

    const citationsNames = result['CURRICULO-VITAE']['DADOS-GERAIS']['@_NOME-EM-CITACOES-BIBLIOGRAFICAS'].split(';')

    let authorCitationsName = await CitationService.findOrPopulate(citationsNames, author);

    
    return author.name;
};
