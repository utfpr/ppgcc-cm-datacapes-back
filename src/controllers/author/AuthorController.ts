import { Request, Response } from "express"
import { AuthorService } from "../../services/author/author"

export class AuthorController {
    static getAuthor = async function (req: Request, res: Response) {
        console.log(req.params['id'])
        const author = await AuthorService.getAuthor(req.params['id']);
        console.log('author', author)
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