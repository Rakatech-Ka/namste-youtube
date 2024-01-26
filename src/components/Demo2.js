
import React, { useEffect, useRef, useState } from 'react';


const Demo2=() =>{
    let x=0;
    
    const [y, setY] = useState(0);

    const ref = useRef(0);
      const i=useRef(null)
    useEffect(()=>{
       i.current= setInterval(() =>{
            console.log("Namste Rakesh", Math.random())
        },1000)
        return ()=>clearInterval(i);
    },[])

  return (
    <div className=' m-4 p-4 w-96 h-96 border border-black bg-slate-50'>
       <div>
        <button 
        className='bg-green-200 p-2 m-4'
        onClick={()=>{
            x=x+1;
            console.log(x);
        }}
    
    
         >
            increase X

        </button>
        <span className='font-bold text-2xl'>  x ={x}</span>

       </div>
       <div>
        <button 
        className='bg-green-200 p-2 m-4'
        onClick={()=>{
            setY(y+1);
           
        }}
    
    
         >
            increase Y

        </button>
        <span className='font-bold text-2xl'>  StateY ={y}</span>

       </div>

       <div>
        <button 
        className='bg-green-200 p-2 m-4'
        onClick={()=>{
           ref.current = ref.current+1;
           console.log("ref value=" + ref.current);
           
        }}
    
    
         >
            Ref value 

        </button>
        <span className='font-bold text-2xl'>  Refvalue ={ref.current}</span>

       </div>
       <button className=' p-4 m-2 bg-red-600 text-white-bold rounded-lg'
        onClick={()=>{
            clearInterval(i.current);
        }}
       >stop printing</button>
       
       </div>
  )
}

export default Demo2