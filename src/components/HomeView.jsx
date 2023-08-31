
export default function HomeView({avatar_url, url,name}) {
  return (
    
        <div className=" w-60 relative text-center">
            <img className="w-full rounded-xl" src={avatar_url} alt="avatar_url" />
            
            <div className="absolute bottom-2 -left-2 bg-white p-2 pl-4 rounded-xl
            font-bold font-serif">
              {name}
            </div>
        </div>
  )
}
