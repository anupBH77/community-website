const bcrypt=require('bcryptjs');
const { UserExists } = require('../userUtils/ifUserExists');
const { User } = require('../../schema/UserSchema');
async function signIn(req,res) {
    const [Username,Password]=req.body;
    if(!UserExists(Username)){
        return res.status(401).json(null);  
    }
    const user= await new User.findOne({username:Username});
    const storedPassword= user.password;
    
}