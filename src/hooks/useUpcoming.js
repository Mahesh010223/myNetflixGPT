import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_option } from "../utils/constants"
import { addUpcomingMovies } from "../utils/moviesSlice"


const useUpcoming = ()=>{

    const dispach =  useDispatch()
    const getUpcoming=async()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_option)
        const json = await data.json()
       dispach(addUpcomingMovies(json.results))
      }
    
      useEffect(()=>{
        getUpcoming()
      },[])
}




export default useUpcoming
