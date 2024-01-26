import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generate, genrateMessage } from '../utils/helper';

const LiveChat =() =>{

  const [liveMessage, setLiveMessage] = useState("")
  const dispatch= useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

   useEffect(()=>{
    const i = setInterval(()=>{
      //console.log("Api polling");
       dispatch(
        addMessage({
        name:generate(),
        message: genrateMessage(30)+"🧨🎇"
       })
       )
    },500)
    return() => clearInterval(i);

   },[]);

  return (<>
    <div 
    className='w-full h-[600px] ml-2 p-2 
 border border-gray-400 bg-slate-100 rounded-lg    flex-col-reverse  overflow-y-scroll'>
      <div>
      {
            // Disclaimer: Don't use indexes as keys
            chatMessage.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }   
          </div>
          
    </div>
    <form className='w-full ml-2 p-2  border border-gray-400 rounded-lg'
      onSubmit={(e)=>{
        e.preventDefault();
        console.log("hello submitted work ", liveMessage);
        dispatch(
          addMessage({
            name:"raj kumar",
            message: liveMessage,
          })
        )
        setLiveMessage("");
      }}
    >
      <input 
       className='w-[660px] border border-black px-4'
      type='text'
       value={liveMessage}
       onChange={(e)=> 
       setLiveMessage(e.target.value)}
      />
      <button className='px-2 mx-2 bg-green-200 '>Send</button>
    </form>
    
    
    </>)
}

export default LiveChat