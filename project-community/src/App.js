import logo from './logo.svg';
import './App.css';
import NevBar from './Header/nevigation/nevBar';
import Home from './Body/home';
import SignIn from './signin.signup/signin/signIn';

import SignUp from './signin.signup/signin/signUp';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSignInStats } from './store/reducers/SignInReducer';
import { useEffect } from 'react';

function App() {
  const nevigate= useNavigate();
  const {isSignedIn,userData}= useSelector(selectSignInStats);
  // console.log(selectSignInStats)
  useEffect(()=>{
    console.log("IS SINGED IN", { isSignedIn,userData})
    
    if(isSignedIn){
      nevigate('/posts');
    }
    if(!isSignedIn){
      nevigate('/signin');
    }
  },[isSignedIn])
 

 

  return (
  
    <div className="App h-screen">
       {isSignedIn?<NevBar/>:null}
       {/* <div className='mt'> */}

      <Routes>
        <Route element={<SignIn/>} path='/signin'/>
        <Route element={<SignUp/>} path='/signup'/>
        <Route element={ <Home/>} path='/posts'/>
      </Routes>
       {/* </div> */}
    
    </div>
  );
}

export default App;
