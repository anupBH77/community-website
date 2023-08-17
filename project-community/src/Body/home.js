import { useSelector } from "react-redux";
import MainFeed from "./Midle/MainFeeds";
import AboutMe from "./Right-aside/AboutMe";
import Post from "./left-aside/Post";
import { selectSignInStats } from "../store/reducers/SignInReducer";

export default function Home (){
    // const obj= useSelector(selectSignInStats);
    // console.log(obj)
    // const cookiedata=  decodeURIComponent(document.cookie)
    // console.log(cookiedata)
    return(
        <div className="h-screen bg-slate-300 grid grid-cols-4 grid-row-4 p-3 gap-3">
            <Post class={" mt-24 col-span-1 bg-white h-1/2  rounded-md"}/>
            <MainFeed class={" mt-20 rounded-lg col-span-2 bg-white border "}/>
            <AboutMe class={"mt-24 col-span-1 bg-white h-2/3 rounded-md"}/>
        </div>
    );
}