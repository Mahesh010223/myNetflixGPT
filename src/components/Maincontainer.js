import React from 'react'
import VideoTital from './VideoTital'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const Maincontainer = () => {

    const movies=useSelector((store)=>  store.movies?.nowPlayingMovies)
    if(movies==null){
        return null
    }
    const mainMovie=movies[3]

    const {original_title,overview,id}=mainMovie
    
  return (
    <div>
      <VideoTital title={original_title} overview={overview}/>
      <VideoBackground videoId={id}/>
    </div>
  )
}

export default Maincontainer
