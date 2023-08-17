import axios from "axios";
import { ReactComponent as LikeIcon } from "./like.svg";
import { useSelector } from "react-redux";
import { selectSignInStats } from "../../store/reducers/SignInReducer";
export default function PostsCard  ({username, post_description, postImage_path,posted_at,_id,likes}){
    const {userData}=useSelector(selectSignInStats);
    const {username:curUser}= userData
    let postfix='seconds'
    let post_time=  (new Date()-new Date(posted_at))/1000; 
    if(post_time>=60){
        post_time/=60
        postfix= 'minutes';
        if(post_time>=60){
            post_time/=60;
            postfix='hours'
            if(post_time>=24){
                post_time/=24;
                postfix='days'
            }  
        }  
    }
    post_time=Math.round(post_time)
    // post_time.
    return(
        <div className=" w-11/12 mx-auto mt-8 ">
        <div className=" border border-gray-300 shadow-lg rounded-lg">
            <div className="p-4">
                <span className="text-gray-800 font-bold text-lg -left">{username}</span>
            </div>

            <div className="px-4 pb-2">
              <span className=" text-start   text-gray-600 text-sm">{post_time} {postfix}</span>
            </div>
            {postImage_path?
                <img src={`http://localhost:8000/images/${postImage_path}`} alt="Post Image" className="w-full h-auto" />:
                null
            }

            <div className="p-4">
                <p className="text-gray-800 text-left">
                   {post_description}
                </p>
            </div>

            <div className="border flex justify-between items-center p-4">
                <div className="flex items-center space-x-2">
                <LikeIcon onClick={()=>axios.post("http://localhost:8000/post/like",{postId:_id,username:curUser})} className={"hover:cursor-pointer "} />
                <p className=" text-sm">{likes}</p>
                </div>
            </div>
        </div>
    </div>
        
    );
}