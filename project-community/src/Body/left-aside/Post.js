import { useEffect, useState } from "react";
import { ReactComponent as SendIcon } from "./send.svg";
import { ReactComponent as ImgIcon } from "./image.svg";

import axios from "axios";
import { useSelector } from "react-redux";
import { selectSignInStats } from "../../store/reducers/SignInReducer";
export default function Post(props) {
    // const {userData}= useSelector(selectSignInStats);
    // const {username}= userData;
    // useEffect(()=>{
        let username=undefined;
        const {userData}= useSelector(selectSignInStats);
        if(userData){
            username= userData.username
        }
        
       
    // })
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const handlePost = (e) => {
    setPost(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const submitFormHandler = async () => {
    const formData = new FormData();
    formData.append("image", image);
    post.trim();
    formData.append("post_desc", post);
    formData.append("username",username );
    const resp = await axios.post(
      "http://localhost:8000/post/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return (
    <div className={`bg-white ${props.class}`}>
      <div className=" ">
        <input
          value={post}
          placeholder="post something.."
          onChange={handlePost}
          className="text-base border-e-0   font my-6 p-5 font- rounded-s-full rounded-e-none bg-slate-40  border-slate-700 border"
        ></input>
        <button
          className="my-6 p-5 rounded-s-none rounded-e-full bg-slate-40 border-s-0 border-slate-700 border "
          onClick={submitFormHandler}
        >
          post
        </button>
        {/* <img></img> */}
      </div>
      <div>
      <label for="image-upload" class=" w-1/3 custom-upload flex items-center px-4 py-2  border  border-gray-300 rounded-md cursor-pointer">
    <input onChange={handleImageChange} type="file" id="image-upload" accept="image/*" class="hidden"/>
  <ImgIcon/>
  Photo
</label>
        {/* <label className=" px-4 py-2 hover:cursor-pointer bg-slate-400">
          <input
            type="file"
            className=" hidden"
            accept="image/*"
            onChange={handleImageChange}
          ></input>
          <ImgIcon className=" flex items-center mr-1"/>Photos
        </label> */}
      </div>
    </div>
  );
}
