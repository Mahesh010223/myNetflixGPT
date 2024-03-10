import React, { useRef, useState ,useEffect} from 'react'
import { CheckValidate } from '../utils/CheckValidate';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile, onAuthStateChanged  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Login = () => {

  
  let[isSignInForm,setIsSignInForm]=useState(true)
  const[errorMessage,setErrorMessage]=useState(null)
   const nevigate=useNavigate()
  const email=useRef(null)
  const password=useRef(null)
    const name =useRef(null)


    const dispach=useDispatch()
    useEffect(()=>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName} = user;
      dispach(addUser({uid:uid,email:email,displayName:displayName}))
      // ...
      nevigate("/browse")
      } else {
      // User is signed out
      // ...
      dispach(removeUser())
      nevigate("/")
      }
      });
      
      },[])

  const handleBiuutonClick = (e)=>{
    //vaidate the form
    e.preventDefault()
   let message = CheckValidate(email.current.value,password.current.value)
   setErrorMessage(message)
   if(message){
    return null
   }
   //Sign in Signup logic
   if(!isSignInForm){
    //Sign uplogiic

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
    //update user with name and photo


    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        const {uid,email,displayName} = auth.currentUser;
    dispach(addUser({uid:uid,email:email,displayName:displayName}))
        // Profile updated!
      
      }).catch((error) => {
        // An error occurred
        // ...
      })
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode+"-"+errorMessage)
    // ..
  });

   }else{
    //sign in logic
    const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });


   }
    
  }
  const handleSignin = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
    
    <div className="absolute">
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg'/>
    </div>
    <form className="bg-black absolute mx-auto my-36 left-0 right-0 w-3/12 p-12 text-white rounded-lg bg-opacity-75">
      <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && <input ref={name}  type='text' placeholder='First NAME' className='p-2 my-4 w-full bg-gray-700'/>}
      <input ref={email} type='email' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700'/>
      <input ref={password} type='password' placeholder='password' className='p-2 my-4 w-full bg-gray-700'/>
      <button className='p-2  my-6 bg-red-700 w-full' onClick={handleBiuutonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className='p-2 my-2 '>{errorMessage}</p>
      <p onClick={handleSignin} className="cursor-pointer">{isSignInForm?"New to NETFLIX?Singn up" :"Allredy registered Sign in now"}</p>
    </form>
    

    </div>
  )
}

export default Login
