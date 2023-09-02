import { Link } from "react-router-dom";

export default function ProfileView({avatar_url, url,name}) {
  return (
    
        <div className=" w-60 relative text-center mb-4">
          <Link>
              <img className="w-full rounded-xl" src={avatar_url} alt="avatar_url" />
            
              <div className="absolute bottom-2 -left-2 bg-white p-2 pl-4 rounded-xl
              font-bold font-serif">
              {name}
              </div>
            </Link>
        </div>
  )
}
