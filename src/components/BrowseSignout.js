import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';


const BrowseSignout = () => {
    
    const store = useSelector((state)=>state.user)
    const navigate=useNavigate()
  const handlesignout = ()=>{
    const auth = getAuth();

    
signOut(auth).then(() => {
  // Sign-out successful.
 
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='absolute z-50 right-3'>
      <div className="">
      <button  onClick={handlesignout} className="font-bold text-orange-500 mt-6 mr-12 z-40 ">Sign Out-{store?.displayName}</button>

      </div>
    </div>
  )
}

export default BrowseSignout
