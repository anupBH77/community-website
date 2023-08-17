const express = require('express');
const { PostUploadController,getPostController, postLikeController } = require('./post.controler');
const postRouter=express.Router();
const path= require('path');
const multer = require('multer')
const storage= multer.diskStorage({
    destination:function (req,file,cb){
       cb(null, path.join(__dirname,'.','/postImages') ) 
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'-'+file.originalname);
    }
})
const upload = multer({storage:storage});


postRouter.post('/upload',upload.single('image'),PostUploadController)
postRouter.get('/getposts',getPostController)
postRouter.post('/like',postLikeController)
module.exports ={
    postRouter,
}
