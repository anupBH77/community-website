const bcrypt = require('bcryptjs');
const { User } = require('../schema/UserSchema');

async function checkUserName(username){
    const resp= await User.findOne({username:username}) || User.findOne({email:username})
    return resp;
}
async function checkPass(pass,hashedpass) {
    const isMatch = await bcrypt.compare(pass,hashedpass)
    console.log(isMatch);
    return isMatch;
    
}
async function SignInController(req,res){
    // res.json('null')
    const {Username,Password}= req.body;
//    return res.json(Username)
    
    if(await checkUserName(Username)){
        const userData=await checkUserName(Username);
        if(await checkPass(Password,userData.password)){

           return res.json(userData)
        }
        else{
          return  res.json(null);
        }
    }
    else{
        return res.json(null)
    }
}
module.exports ={
    SignInController,
}