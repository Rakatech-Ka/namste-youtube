import React from 'react'

 const VideoCard=({info})=> {
  console.log(info);
 
  const {snippet, statistics} = info ||{} ;

  const {channelTitle,thumbnails, title} = snippet||{};
  const {viewCount}=statistics ||{};
  const{medium}=thumbnails||{};
  const{url} = medium ||{};


  
  return (
    <div className='p-2 m-2 w-72 shadow-lg '>
      <img className='rounded-lg' alt="logo" 
      src={url}/>
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{ viewCount}</li>
      </ul>
    </div>
  );
};

export const AdVideocard =({info})=>{
  return(
    <div className='p -1 m-1 border:border bg-red-900'>
    <VideoCard info = {info}/>
    </div>
  );
};

export default VideoCard;