import axios from "axios";
import { useEffect, useState } from "react"
import HomeView from "./HomeView";

export default function HomePage() {

    const [profile, setProfile] = useState([]);
    const gitLink = 'https://api.github.com/users/a74644';

    async function fetchData(){
        const response = await axios.get(gitLink);
        console.log("response",response.data);
        const results = response.data;
        const resultData = results.map((result)=>{
            return {
            id: result.id,
            url: result.url,
            avatar_url: result.avatar_url
            }    
        })
        console.log("result data",resultData)
        setProfile(resultData);
    }
    useEffect(()=>{
        fetchData();
    },[]);


  return (
    <div>
      {profile.map((p)=> <HomeView key={p.id} avatar_url={p.avatar_url} url={p.url} />)
      }
    </div>
  )
}
