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

export const executeFile = function(filePath: string) {
    
    // abrir o arquivo
    let file = fs.readFileSync(filePath, {encoding:'utf8'});
    
    // cria o parser xml com as opções
    const parser = new XMLParser(options)
    const result = parser.parse(file)
    
    // retorna o nome do autor
    return getPersonalInfo(result);
};