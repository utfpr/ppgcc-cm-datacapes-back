import fs from 'fs';
import { getPersonalInfo } from "../author/author"
import { XMLParser } from "fast-xml-parser"

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
    
    // retorna o nome do autor
    return await getPersonalInfo(result);
};