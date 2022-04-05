import fs from 'fs';
import { parseString, Builder } from "xml2js";

export const executeFile = function(filePath: string) {

    // abrir o arquivo
    let file = fs.readFileSync(filePath, {encoding:'utf8'})

    // transformar em JSON
    parseString(file, { explicitArray: false }, function(error, result) {
        console.log(result['CURRICULO-VITAE']['DADOS-GERAIS']);
    });
};