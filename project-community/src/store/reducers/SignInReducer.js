import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    isLoading:false,
    isSignedIn:false,
    userData:undefined,
    error:null,
}

export const startUserAuth= createAsyncThunk('user/startAuth',async (userData)=>{

    const resp = await axios.post("http://localhost:8000/login",userData);
    return resp.data;
}) 
const SigninSlice= createSlice({
    initialState,
    name:'Signin',
    extraReducers:(builder)=>{
        builder.addCase(startUserAuth.pending,(state)=>{
            state.isLoading=true;            
        })
        builder.addCase(startUserAuth.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSignedIn = true;
            state.userData= action.payload.userData;
            state.error= action.payload.error;
        })
        builder.addCase(startUserAuth.rejected, (state,action)=>{
            state.isLoading = false;
            state.userData= undefined;
            state.isSignedIn = false
            state.error = action.error.message;
        })
    } 
})

export const selectSignInStats = (state)=> state.Signin; 
export default SigninSlice.reducer;