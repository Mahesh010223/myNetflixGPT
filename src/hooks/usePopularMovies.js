import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_option } from "../utils/constants"
import { addPopularMovies } from "../utils/moviesSlice"


const usePopularMovies = ()=>{

    const dispach =  useDispatch()
    const getNowpalyinMovies=async()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_option)
        const json = await data.json()
       dispach(addPopularMovies(json.results))
      }
    
      useEffect(()=>{
        getNowpalyinMovies()
      },[])
}


export default usePopularMovies ;

