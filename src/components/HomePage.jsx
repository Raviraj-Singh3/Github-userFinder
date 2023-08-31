import axios from "axios";
import { useEffect, useState } from "react"
import HomeView from "./HomeView";
// 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

export default function HomePage() {

    const [profile, setProfile] = useState([]);
    const gitLink = 'https://api.github.com/users';

    async function fetchData(){
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: gitLink,
        headers: { 
          'Authorization': 'Bearer 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'
        }
      };
     
        const response = await axios.request(config);
        console.log("response",response);
        const results = response.data;
        const resultData = results.map((result)=>{
            return {
            id: result.id,
            url: result.url,
            avatar_url: result.avatar_url,
            name: result.login
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
      {profile.map((p)=> <HomeView key={p.id} name={p.name} avatar_url={p.avatar_url} url={p.url} />)
      }
    </div>
  )
}
