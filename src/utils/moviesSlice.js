import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload

        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload

        },
        addToprated:(state,action)=>{
            state.topratedMovies = action.payload

        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        }
    },
})



export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addToprated,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;