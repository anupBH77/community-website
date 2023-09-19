import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { selectSignInStats, startUserAuth } from "../../store/reducers/SignInReducer";

export default function SignIn() {
    const dispatch = useDispatch();
    const loginstatus= useSelector(selectSignInStats);
    // console.log(log);
    const nevigate= useNavigate();
    const [inputData,setData]= useState({
        username:'',
        password:'',

    });
    const changeHandler= (e)=>{
        setData((prev)=>{return {...prev,[e.target.name]:e.target.value}})
    }
    const submitHandler= async()=>{
        const formData= inputData;
        dispatch(startUserAuth(formData))
        console.log(loginstatus);

       
        
        
    }
   
  return (
<div >
<div class=" bg-grey-lighter min-h-screen flex flex-col ">
        <div class=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
            <div class=" bg-white px-6 py-14 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign in</h1>
                <input 
                value={inputData.username}
                    onChange={changeHandler}
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="username"
                    placeholder="Email or username" />
                <input
                value={inputData.password} 
                    onChange={changeHandler}
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />
                <button
                    onClick={submitHandler}
                    type="submit"
                    class="w-full text-center py-3 rounded bg-black text-white hover:bg-gray-900 focus:outline-none my-1"
                >SIGN IN</button>
                <p className=" text-center">or</p>
                <button 
                    onClick={()=>{nevigate('/signup')}}
                    type="submit"
                    class="w-full text-center py-3 rounded bg-slate-700 text-white hover:bg-gray-600 focus:outline-none my-1"
                >SIGN UP</button>
            </div>

          
        </div>
    </div>
      
</div>
  );
}
