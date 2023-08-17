const { User } = require('../../schema/UserSchema');
const { posts } = require('../../schema/postsSchema');
// require('w')
async function PostUploadController (req,res){
    // const [post,]
    const {username,post_desc}= req.body;
    const imgPath= req.file?req.file.filename:null
    const descsription= post_desc || null
    const newPost = new posts({
        post_description:descsription,
        username:username,
        postImage_path:imgPath,
    })
    try{
        
      await newPost.save();
      return res.json("posted successfully");
    }
    catch(error){
        res.json("could not complete");
    }

}
async function getPostController(req,res){
    const postsData = await posts.find();
    return res.json(postsData);
}

async function postLikeController(req,res){
    const {postId,username}= req.body;
    const LikedPost= await posts.findById(postId);

    if(LikedPost.liked_by.includes(username)){
        await posts.updateOne({_id:postId},{
            $pull:{liked_by:username},
            $set:{likes:LikedPost.liked_by.length-1 }
           
        })
        await User.updateOne({username:username},{$pull:{
            liked_Posts:postId,
        }})
        console.log('post was desliked.')
        console.log(postId,username,LikedPost.likes,LikedPost.liked_by)

    }else{
        await posts.updateOne({_id:postId},{
            $addToSet:{
                liked_by:username,     
            },
            $set:{likes:LikedPost.liked_by.length+1}
        });
        await User.updateOne({username:username},{$addToSet:{
           liked_Posts:postId, 
        }})
        console.log("post was liked length",LikedPost.liked_by.length )
        console.log(LikedPost.liked_by)
    }
    res.status(204);
}

async function getMyPostsController(req, res){
    const {username}= req.body;
    try{
        const postsData=await posts.find({username:username});
       return  res.json(postsData);
    }catch(err){
       return  res.json(err)
    }



}

module.exports ={
    postLikeController,
    PostUploadController,
    getPostController,
}