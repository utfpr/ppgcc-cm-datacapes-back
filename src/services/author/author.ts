import { getRepository } from "typeorm";
import { AuthorEntity } from "../../database/entities/AuthorEntity";

export class AuthorService {
    
    // private AuthorRepository;

    constructor() {
        // this.AuthorRepository = getRepository(AuthorEntity);
    }

    static findOrPopulate = async function(author: AuthorEntity) {
        let authorRepository = getRepository(AuthorEntity);
        let authorFound = await authorRepository.findOne({ lattesId: author.lattesId });
    
        if (!authorFound) {
            authorFound = await authorRepository.create(author);
        } else {
            authorFound.name = author.name;
            authorFound.orcid = author.orcid;
            authorFound.institution = author.institution;
        }
    
        return authorFound;
    }

    static getAuthor = async function(id: string) {
        let authorRepository = getRepository(AuthorEntity);
        let authorFound = await authorRepository.findOne({ id });
        
        return authorFound;
    }
}
