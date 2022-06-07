import { getRepository } from "typeorm";
import { AuthorEntity } from "../../database/entities/AuthorEntity";

export class AuthorService {

    private static AuthorRepository = getRepository(AuthorEntity);

    static findOrPopulate = async function(author: AuthorEntity) {
        let authorFound = await this.AuthorRepository.findOne({ lattesId: author.lattesId });
    
        if (!authorFound) {
            authorFound = this.AuthorRepository.create(author);
            
        } else {
            authorFound.name = author.name;
            authorFound.orcid = author.orcid;
            authorFound.institution = author.institution;
        }
    
        return authorFound;
    }

    static getAuthor = async function(lattesId: string) {
        let authorFound = await this.AuthorRepository.findOne({ lattesId: lattesId });
        
        return authorFound;
    }

}
