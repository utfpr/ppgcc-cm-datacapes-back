
import { executeFile } from '../../services/parser/parser';
import { uploadFile } from '../../services/multer/multer';
import { Request, Response } from 'express';

var arquivo = uploadFile.single('arquivo');

export const parseFile = function(req: Request, res: Response) {
  arquivo(req, res, async (err) => {

    // caso ocorra algum problema com o multer (usuario enviar mais de um arquivo)
    if (err){
      return res.status(400).json({
        message: '{error.parser.upload_file}'
      });
    }
    
    // caso não tenha nenhum arquivo
    if (!req.file){
      return res.status(412).json({
        message: '{error.parser.upload_file.not_found}'
      });
    }
    
    let fileExtension = req.file.originalname.split('.').pop();
    
    // caso não seja um .xml
    if (fileExtension != 'xml') {
      return res.status(400).json({
        message: '{error.parser.upload_file.not_xml}'
      });
    }
    
    let fileSize = req.file.size;
    
    // caso tamanho passe do permitido
    if (fileSize > 10000000) {
      return res.status(413).json({
        message: '{error.parser.upload_file.max_size}'
      });
    }
    
    let msg = await executeFile(req.file.buffer);
    
    return res.status(200).json({
      author_name: msg,
    });
  })
};