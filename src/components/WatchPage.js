import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage=() =>{

     const [searchParams] = useSearchParams();
     console.log(searchParams.get("v"));
     
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='p-4 flex flex-col w-full'>
      <div className='flex px-5 w-full'>
        <div className=''>
        <iframe
         width="1200" 
         height="600"
         src={"https://www.youtube.com/embed/" + searchParams.get("v")}
         title="YouTube video player"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen></iframe>
           </div>
            <div className='w-full  '>
           <LiveChat/>
           </div>
           </div>
           <div><CommentContainer/> </div>
        </div>
  )
}

export default WatchPage;