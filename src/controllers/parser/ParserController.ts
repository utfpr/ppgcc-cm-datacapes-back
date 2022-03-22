const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: '../../../uploads/' })

const app = express()

app.post('/parser/', upload.array('xmlFile'), function (req, res, next) {

    console.log('chegou aqui')
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })


export function parseXML(){
    console.log('BOA')
}
  