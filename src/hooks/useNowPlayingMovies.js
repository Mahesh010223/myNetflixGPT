import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_option } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"


const useNowPlayingMovies = ()=>{

    const dispach =  useDispatch()
    const getNowpalyinMovies=async()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_option)
        const json = await data.json()
       dispach(addNowPlayingMovies(json.results))
      }
    
      useEffect(()=>{
        getNowpalyinMovies()
      },[])
}


export default useNowPlayingMovies ;