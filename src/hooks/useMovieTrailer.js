import { useEffect } from 'react'
import { API_option } from '../utils/constants'
import { useDispatch,  } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMovieTrailer = (videoId) => {
    const dispach=useDispatch()

    const videoBackground=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos`,API_option)
        const json = await data.json()
        const filterData= json.results.filter((el)=>{
            return el.type == "Trailer"
            
        })
     const trailer = filterData.length !== 0 ? filterData[0]:json.results[0]
     dispach(addTrailerVideo(trailer))
    }
   
    useEffect(()=>{
        videoBackground()
    },[])
}

export default useMovieTrailer
