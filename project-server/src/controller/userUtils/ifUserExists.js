const {User}=require('../../schema/UserSchema')
async function UserExists(username){
    const response= await User.findOne({ "username": username})
    return !!response;
}
module.exports ={
    UserExists,
}