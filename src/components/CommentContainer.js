import React from 'react'

const CommentContainer=()=> {
   const commentsData= [
    {
     name: "Rakesh Yadav",
     text: "Good for intertainments",
     replies:[
        {
            name: "Rakesh Yadav",
            text: "Good for intertainments",
            replies:[
                {
                    name: "Rakesh Yadav",
                    text: "Good for intertainments",
                    replies:[
                        {
                            name: "Rakesh Yadav",
                            text: "Good for intertainments",
                            replies:[]
                           },
                    ]
                   },
            ]
           },
     ]
    },
    {
     name: "Rakesh Yadav",
     text: "Good for intertainments",
     replies:[

     ]
    },
    {
        name: "Rakesh Yadav",
        text: "Good for intertainments",
        replies:[
            {
                name: "Rakesh Yadav",
                text: "Good for intertainments",
                replies:[]
               },
               {
                name: "Rakesh Yadav",
                text: "Good for intertainments",
                replies:[]
               },
               {
                name: "Rakesh Yadav",
                text: "Good for intertainments",
                replies:[]
               },
        ]
       },
       {
        name: "Rakesh Yadav",
        text: "Good for intertainments",
        replies:[
            {
                name: "Rakesh Yadav",
                text: "Good for intertainments",
                replies:[]
               },
               {
                name: "Rakesh Yadav",
                text: "Good for intertainments",
                replies:[]
               },
   
        ]
       },
       {
        name: "Rakesh Yadav",
        text: "Good for intertainments",
        replies:[]
       },
       {
        name: "Rakesh Yadav",
        text: "Good for intertainments",
        replies:[
   
        ]
       },
   ]
   const CommentList = ({comments})=>{
    return comments.map((comments)=>
    <div> 
        
        <Comments data={comments}/>
        <div className='pl-5 border border-l-black ml-5 '>
        <CommentList comments={comments.replies}/>

        </div>
    
    </div>
                  
                

         
    )}
        
   
   const Comments = ({data}) =>{
     const {name, replies, text} =data;
    return(
        <div className='flex shadow-sm rounded-lg bg-gray-100 p-2'>
         <img alt='user'
        className='w-12 h-12'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmADCanENXbPEIU8BSSP8tofT9ydhrTCBaw&usqp=CAU'/>
       <div className='px -3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
        </div>
        </div>
    )
   }

  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold '>Comments:</h1>
         <CommentList comments={commentsData}/>
        </div>
  )
}

export default CommentContainer