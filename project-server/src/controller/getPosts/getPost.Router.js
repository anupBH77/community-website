const express= require('express')
const { getPostsController } = require('./getPosts.controller')
const getPostRouter = express.Router()
getPostRouter.get('/',getPostsController);
module.exports ={
        getPostRouter,
}