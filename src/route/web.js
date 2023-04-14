import express from "express";
import multer from 'multer';
import path from 'path';
import helloWorldController from "../controllers/helloWorldController";
var appRoot = require('app-root-path');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/upload/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter,limits:{fileSize:1*1024*1024}});
let router = express.Router();

let initWebRouter = (app)=>{
    router.get('/',(req, res)=>{
        return res.send('adafd')
    }) 

    router.get('/homeCOntroller',helloWorldController.getHomePage) 

    return app.use("/",router)
}
module.exports = initWebRouter