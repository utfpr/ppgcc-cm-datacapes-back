import { Request, Response } from "express"
import { AuthorService } from "services/author/author"

export class AuthorController {

    private AuthorService;

    constructor() {
        this.AuthorService = new AuthorService;
    }

    static getAuthor = async function (req: Request, res: Response) {
        const author = this.AuthorService.getAuthor(req.params['id']);

        if (author) {
            res.status(200).send({
                success: true,
                author
            });
        } else {
            res.status(404).send({
                success: false
            })
        }

    }

}