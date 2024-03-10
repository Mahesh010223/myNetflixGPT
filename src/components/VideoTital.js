import React from 'react'

const VideoTital = ({title,overview}) => {
  return (
    <div className=" px-12 pt-52 absolute bg-gradient-to-r from-black text-white w-full aspect-video ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-sm w-1/4 py-4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white text-xl px-6 py-2 rounded-lg bg-opacity-40 font-bold hover:bg-opacity-20">▶ Play</button>
        <button className="bg-gray-500 text-white text-xl px-6 py-2 rounded-lg bg-opacity-40 font-bold mx-4 hover:bg-opacity-20">More Info</button>
      </div>
    </div>
  )
}

export default VideoTital
