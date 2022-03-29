
export const parseFile = function(req, res) {
  console.log('Arquivo enviado: ', req.file);
  res.status(200).json({
    message: 'Arquivo enviado com sucesso!',
  });
};