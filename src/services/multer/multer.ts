const multer = require("multer");

const storage = multer.diskStorage({

    // destino do arquivo
    destination(req, file, cb) {
        const url = `./src/uploads/`;
        cb(null, url);
    },

    // nome do arquivo
    filename(req, file, cb) {
        file.originalname = "re_" + file.originalname;
        cb(null, `${file.originalname}`);
    }
});

export const uploadFile = multer({
    storage: storage
});