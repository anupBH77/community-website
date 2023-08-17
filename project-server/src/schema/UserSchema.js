const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
        username:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            required:true,
            minlength:6,
            type:String,
        },
        email:{
            required:true,
            type:String,
        },
        liked_Posts:[
        {type:mongoose.Schema.ObjectId}
        ],
        my_Posts:[
            {type:mongoose.Schema.ObjectId}
        ]   
    }
)


module.exports ={
    User:mongoose.model("User",UserSchema),
   
}
