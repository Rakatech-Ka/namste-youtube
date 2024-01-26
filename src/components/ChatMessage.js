import React from 'react'

const  ChatMessage=({name, message}) =>{
  return (
    <div className='flex items-center shadow-sm p-2'>
         <img 
        className='h-8 col-span-1'
         alt='logo' src=
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmADCanENXbPEIU8BSSP8tofT9ydhrTCBaw&usqp=CAU'/>
    
    <span className='px-2 font-bold'> {name}</span>
    <span> {message}</span>
    </div>
  );
};

export default ChatMessage;