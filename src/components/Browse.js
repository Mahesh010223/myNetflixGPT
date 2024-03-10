import React, { useEffect } from 'react'
import BrowseSignout from './BrowseSignout'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'
import { getAuth,onAuthStateChanged, } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useToprated from '../hooks/useToprated'
import useUpcoming from '../hooks/useUpcoming'


const Browse = () => {
const navigate=useNavigate()
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
    navigate("/browse")
    } else {
    // User is signed out
    // ...
    dispach(removeUser())
    navigate("/")
    }
    });
    
    },[])
    useNowPlayingMovies()
    usePopularMovies()
    useToprated()
    useUpcoming()
  
  return (
    <div className="" >

     <BrowseSignout/>
     <Maincontainer/>
     <SecondaryContainer/>
    </div>
  )
}

export default Browse
