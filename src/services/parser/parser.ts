import fs from 'fs';
import { parseString, Builder } from "xml2js";

export const executeFile = function(filePath: string) {

    // abrir o arquivo
    let file = fs.readFileSync(filePath, {encoding:'utf8'});
    let author_name = null;

    // transformar em JSON
    parseString(file, { explicitArray: false }, function(error, result) {
        author_name = result['CURRICULO-VITAE']['DADOS-GERAIS']['$']['NOME-COMPLETO'];
    });

    return author_name;
};