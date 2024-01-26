import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Memo=() =>{
    const [text, setText] =useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    console.log("Rendering.........")
    const prime = useMemo(() =>findPrime(text), [text]);
   
    console.log(prime);
  return (
    <div className= {"m-4 p-2 w-96 h-96 border border-black"
       + (isDarkTheme && "bg-gray-900 text-white")
       }
       >

        <div >
         <button className=' m-10 p-2 bg-green-900'
          onClick={(()=> setIsDarkTheme(!isDarkTheme))}
         >
          Toggle
         </button>

        </div>
        <div>
            <input
            className='border border-black w-72 p-2'
            type='number'
            value={text}
            onChange={(e)=> setText(e.target.value)}

            />
        </div>
        <div >
          <h1 className='m-4 font-bold text-xl'>nth Prime: {prime}</h1>
        </div>

    </div>
  )
}

export default Memo