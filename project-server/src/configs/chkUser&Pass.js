const bcryptjs = require('bcryptjs');
const {User} = require('../schema/UserSchema');

async function getUserData(username){
    const userData= await User.findOne({username:username})
    if(!userData){
        return null;
    }
    const {password:DBpassword,username:DBusername,email:DBemail,_id:DBid}= userData;
    return {DBpassword,DBusername,DBemail,DBid};
}

async function chkPass(password,hashedPassword){
   const result = bcryptjs.compareSync(password, hashedPassword);
   if(result){
    return true;
   }
   else{
    return false;
   }
}
module.exports={
    chkPass,
    getUserData,
}