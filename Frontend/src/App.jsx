import React, { useState } from 'react'

const App = () => {
const  [code,setcode]=useState("")


  async function handleReview(){
    try{
const res = await fetch("/ai/ask",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({prompt:code})
}
    )
  const data=await res.json()
  console.log(data)
}
    catch(error){
      console.log(error)

    }
  }

 
  return (
  <div className='min-h-screen text-white font-mono'>
<h1 className='text-center text-4xl mb-6 font-bold mt-3 '>Code Review AI🗿 </h1>
<div className='font-semiboldv grid grid-cols-1 md:grid-cols-2 text-lg gap-6' >
<div className='rounded-xl border border-white my-3 shadow-white px-4 mx-4 py-6  ps-10 '> 
  <h2 className='text-white '>Your Code</h2>
     
<form>
   <div className="w-full mt-5 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" className="sr-only">Your comment</label>
           <textarea id="comment" rows="20" 
           value={code}
           onChange={(e)=>{setcode(e.target.value)}}
            className=" border-gray-700  focus:ring-blue-500 focus:outline-none  w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
           placeholder="//Paste your Code..." required ></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleReview}
          >
      Code Review</button>
           <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
              
               <img width="50px" src="https://gifdb.com/images/high/ai-humanoid-dace-spinning-vtwfyek9t4e3n076.gif" alt="" />
           </div>
       </div>
   </div>
</form>

    
</div>
<div className='rounded-xl border border-white my-3 shadow-white px-4 mx-4 py-6  ps-10 '> 
  <h2 className='text-white '>Code Review</h2>
     
<form>
   <div className="w-full mt-2 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" className="sr-only">Your comment</label>
           <textarea id="comment" rows="20" className= "   border-gray-700 focus:ring-blue-500 focus:outline-none  w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"  required ></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
          
           
       </div>
   </div>
</form>

    
</div>
<div>

</div>
</div>
  </div>
  )
}

export default App