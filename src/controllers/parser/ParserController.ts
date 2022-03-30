
import { executeFile } from '../../services/parser/parser';

export const parseFile = function(req, res) {
  
  if (!req.file){
    return res.status(412).json({
      message: 'Error, missing files.'
    });
  }
  
  let fileExtension = req.file.filename.split('.').pop();

  if (fileExtension != 'xml') {
    return res.status(400).json({
      message: 'Error: the file is not a .xml.'
    });
  }
  
  let fileSize = req.file.size;
  
  if (fileSize > 10000000) {
    return res.status(400).json({
      message: 'Error: file size not permitted (10MB +).'
    });
  }
  
  executeFile(req.file.path);
  
  return res.status(200).json({
    message: 'Arquivo enviado com sucesso!',
  });
};