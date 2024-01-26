import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { json } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';

const Header=() =>{
   const [serachQuary, setSearchQuary] =useState("");
   const [suggestion, setSuggestion] = useState([]);
   const [showSuggestion, setShowSuggestion] = useState(false);
   const searchcache= useSelector((store)=> store.search );

   const dispatch = useDispatch();
   

   useEffect(()=>{
   
   const timer=  setTimeout(()=> {
    if(searchcache[serachQuary]) {
      setSuggestion(searchcache[serachQuary]);}
      else{
       getSearchSuggestions()
      }


  },200);
   return () =>{
    clearTimeout (timer);
   };


   },[serachQuary]);

   const getSearchSuggestions = async () =>{
    console.log ("API_Call -" +   serachQuary)

          const data = await fetch(YOUTUBE_SEARCH_API  + serachQuary);
          const json = await data.json();
          //console.log(json[1]);
          setSuggestion(json[1])
   }


    dispatch(cacheResults({
      [serachQuary]:json[1],

    }))
  
  const toggleMenuHandler =()=>{
    dispatch(toggleMenu());

  } 

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img  
        onClick={() => toggleMenuHandler()}
        className='h-8 cursor-pointer' 
        alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'/>
       <a href='/'>
       <img 
       className='h-8 m-2'
       alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'/>
       </a>
    </div>
    <div 
    className='col-span-10 px-16'>
      <div>
        <input
        className=' px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
         type='text'
         value={serachQuary}
         onChange={(e) =>setSearchQuary(e.target.value)}
         onFocus={()=> setShowSuggestion(true)}
         onBlur={()=> setShowSuggestion(false)}
         
         />
        <button 
        className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'
        >  🔍
             </button>
             </div>
             {showSuggestion &&(
             <div className='fixed bg-white py-2 px-2 w-[37rem] rounded-lg  border border-gray-100'>
              <ul>
                 {suggestion.map((s)=>
                  <li className='py-2 px-3 hover:bg-gray-100 shadow-sm '>🔍 {s}</li>
                 )}
              
              </ul>
             </div>
             )}
        </div>
    <div>
        <img 
        className='h-8 col-span-1'
        
        alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmADCanENXbPEIU8BSSP8tofT9ydhrTCBaw&usqp=CAU'/>
    </div>
    </div>
  )
}

export default Header