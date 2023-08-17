const passport=require('passport')
const express= require('express')
const signinRouter= express.Router();
signinRouter.post('/login',passport.authenticate('local',{
    successRedirect:'/home',
    failureRedirect:'/signin'
}))