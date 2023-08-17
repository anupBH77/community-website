const bcrypt = require('bcryptjs');
const { UserExists } = require('../userUtils/ifUserExists');
const { User } = require('../../schema/UserSchema');


async function signUp(req,res){
    const {username,email,password}= await req.body;
    const userExists=await UserExists(username);
    if(userExists ){
        return res.json('user already exists!');
    }
    if(password.length<6){
        return res.json('password must be longer than 6 characters!')
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);
    const newUser= new User({
        password:hashedPassword,
        email:email,
        username:username,
    })
    try{
    await newUser.save();
    }catch(err){
        return  res.status(401).json(err);
    }
    return res.status(201).json('signed up succcessfully!');
}

module.exports ={
    signUp,
}
