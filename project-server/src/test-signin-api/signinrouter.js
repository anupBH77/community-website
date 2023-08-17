const express = require('express');
const { SignInController } = require('./signincontroller');
// const app= express()
const testSignInRouter=express.Router();
testSignInRouter.post('/',SignInController);
module.exports ={
    testSignInRouter,
}