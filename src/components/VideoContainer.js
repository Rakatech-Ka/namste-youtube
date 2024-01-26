import React, { useEffect, useState } from 'react'
import { GOOGLe_API_KEY, YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCard, { AdVideocard }  from './VideoCard';
import { Link } from 'react-router-dom';
//import VideoCard from './VideoCard';

const VideoContainer =() =>{
  const [videos , setVideos] = useState([]);
  useEffect(()=>{

    getVideo();

  },[])

  const getVideo = async () =>{
    const data = await fetch(YOUTUBE_VIDEO_API + GOOGLe_API_KEY);
    const json = await data.json();
    //console.log(json.items);
    setVideos(json.items)
   

  }

  return (
    <div className='flex flex-wrap'>
     <AdVideocard info = {videos[0]}/>
     
      {
        videos.map ((video)=> (
         <Link key={video.id} to={"/watch?v=" + video.id}> 
         <VideoCard  info = {video}/>
         </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer;