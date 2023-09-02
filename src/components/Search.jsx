import { useState } from "react"

function Search({updateSearchTerm}) {
  return (
    <div className="flex justify-center ">
      <div className="w-1/3 p-5 mt-5">
        <input type="text" placeholder="Enter photo id" className="bg-green-300 w-full p-5
        rounded-2xl text-center " 
        
        onChange={(e)=> updateSearchTerm(e.target.value)}
        />
      </div>
      <div>
      </div>
     </div>
  )
}

export default Search
