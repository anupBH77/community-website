import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp (){
    const [signupMsg,setMsg]=  useState();  
     const [signupData,setData]=useState({


        username:'',
        password:'',
        email:''
})
    const changeHandler=(e)=>{
        setData((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
    const submitHandler=async ()=>{
        try{
        const formData= signupData
        const resp= await axios.post('http://localhost:8000/signup',formData);
        setMsg(resp.data);
        console.log(resp.data);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div>
            {signupMsg? <div class="text-grey-500 mt-6">
                 {signupMsg}
                 </div>:null}
           
            <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <input 
                    value={signupData.username}
                    onChange={changeHandler}
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="username"
                    placeholder="Full Name" />

                <input 
                    value={signupData.email}
                    onChange={changeHandler}
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" />

                <input 
                    onChange={changeHandler}
                    value={signupData.password}
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />
                <input
                    value={signupData.password} 
                    onChange={changeHandler}
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="confirm_password"
                    placeholder="Confirm Password" />

                <button
                    onClick={submitHandler}
                    type="submit"
                    class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                >Create Account</button>

                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the 
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and 
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div class="text-grey-500 mt-6">
                Already have an account? 
                <Link class=" no-underline border-b border-blue-500 text-blue-500" to={"signin"}>Log in</Link>
            </div>
        </div>
    </div>
        </div>
    );
}