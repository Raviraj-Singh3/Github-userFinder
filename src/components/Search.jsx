import useDebounce from "./useDebounce"

function Search({updateSearchTerm}) {
  const debouncedCallback = useDebounce((e)=> updateSearchTerm(e.target.value))
  return (
    <div className="flex justify-center -mt-4">
      <div className="w-1/3 p-5 mt-5">
        <input type="text" placeholder="Enter photo id" className="bg-green-300 w-full p-5
        rounded-2xl text-center " 
        
        onChange={debouncedCallback}
        />
      </div>
      <div>
      </div>
     </div>
  )
}

export default Search
