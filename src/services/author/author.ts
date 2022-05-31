import { getRepository } from "typeorm";
import { AuthorEntity } from "../../database/entities/AuthorEntity";

export const getAuthor = async function(author: AuthorEntity) {
    const AuthorRepository = getRepository(AuthorEntity);

    let authorFound = await AuthorRepository.findOne({ lattesId: author.lattesId });
    
    if (!authorFound) {
        authorFound = AuthorRepository.create(author);
    } else {
        authorFound.name = author.name;
        authorFound.orcid = author.orcid;
        authorFound.institution = author.institution;
    }

    return authorFound;
}