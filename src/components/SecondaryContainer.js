import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white pl-8">
      <div className='-mt-60 relative z-50'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topratedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer
