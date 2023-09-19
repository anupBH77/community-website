import { useSelector } from "react-redux";
import './MainFeedsScr.css'
import { useEffect, useState } from "react";
import axios from "axios";
import PostsCard from "../../components/cards/PostsCard";

export default function MainFeed  (props){
    const [posts, loadPosts]= useState({isLoading:true,postsArray:[]})
    var data;
    useEffect(()=>{
        async function fetchdata(){
        const postResp= await axios("http://localhost:8000/posts"
      
        )
        loadPosts({isLoading:false, postsArray:postResp.data})
   
        }
        fetchdata();
    },[])

    return(
        <div className={`${props.class} max-h-full overflow-y-auto  scroll_hide`}>
            {posts.isLoading?
              <div class="border-t-4 border-gray-600 m-auto mt-8 rounded-full animate-spin h-16 w-16"></div>:
              posts.postsArray.map((postDetails)=><PostsCard key={postDetails._id} {...postDetails}></PostsCard>
                
            )
            }


        </div>
    );
}