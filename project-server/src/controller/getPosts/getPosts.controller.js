const {posts} = require('../../schema/postsSchema');
async function getPostsController  (req,res){
    const postsData=await posts.find();
    res.json(postsData)
}
module.exports={
    getPostsController,
}