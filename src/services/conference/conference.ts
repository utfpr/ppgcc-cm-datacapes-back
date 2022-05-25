import { AuthorEntity } from "../../database/entities/AuthorEntity";
import { ConferenceEntity } from "../../database/entities/ConferenceEntity";
import { getRepository } from "typeorm";

export const createConferenceFromAuthor = function(json, author: AuthorEntity) {
    const conferenceRepository = getRepository(ConferenceEntity);
    let conferences = null;

    try {
        conferences = json['CURRICULO-VITAE']['PRODUCAO-BIBLIOGRAFICA']['TRABALHOS-EM-EVENTOS']['TRABALHO-EM-EVENTOS']
    } catch (error) {
        conferences = undefined;
    }

    if (undefined != conferences) {
        console.log('Possui conferencias');
    }

    return null;
}