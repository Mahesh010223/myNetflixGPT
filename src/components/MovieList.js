import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
 
  return (
    <div className='p-2' >
      <h1 className='text-3xl py-2'>{title}</h1>
        <div >  
            <div className='flex overflow-x-scroll'>
              {movies && 
              <div className='flex '>{movies?.map((movie)=><MovieCard posterPath={movie.poster_path}/>)}</div>}
                
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
