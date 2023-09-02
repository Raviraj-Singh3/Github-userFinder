import axios from "axios";
import { useEffect, useState } from "react"
import ProfileViw from "./ProfileView";
// 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

export default function ProfileList() {

    const [profile, setProfile] = useState([]);
    const gitLink = 'https://api.github.com/users';

    async function fetchData(){
      // let config = {
      //   method: 'get',
      //   maxBodyLength: Infinity,
      //   url: gitLink,
      //   headers: { 
      //     'Authorization': 'Bearer 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'
      //   }
      // };
     
        const response = await axios.request(gitLink);
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
    <div className=" justify-center content-center items-center flex">
      <div className="grid grid-cols-5 w-5/6  justify-center mt-10">
        {profile.map((p)=> <ProfileViw key={p.id} name={p.name} avatar_url={p.avatar_url} url={p.url} />)
        }
      </div>
    </div>
  )
}
