const mongoose = require('mongoose');

const postSchema= new mongoose.Schema(
    {
        post_description:{
            type:String,
            default:null

        },
        posted_at:{
            type:Date,
            default: Date.now,
        },
        username:{
            type:String,
            required:true,
        },
        postImage_path:{
            type:String,
            default:null,
        },
        liked_by:[
            {type:String}
        ],
        likes:{
            type:Number,
            default:0
        }
           
    }
)
postSchema.methods.getPostLikes= function(){
    return this.post_likes.length;
}

module.exports ={
  posts: mongoose.model('posts',postSchema)
}

