import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
function ProfileDetails({profileName}){
    const [imageDetails, setImageDetails] = useState({})
    // const {id} = useParams()
    // console.log("login id",id)

    async function downloadPhotos(){
        
        const response = await axios.get(`https://api.github.com/users/${profileName}`);
        console.log("by name", response);
        // else{
        //     const response = await axios.get(`https://api.github.com/users/${id}`);
        //     console.log(response.data)
        // }
        
        const responseData = response.data;

        setImageDetails({
            name: responseData.name,
            url: responseData.avatar_url,
            id: responseData.login,
            profileLink: responseData.html_url
        })
            
        console.log("imagew",imageDetails)
    }
    useEffect(()=>{
        downloadPhotos()
    },[])

    return(
        <div className="text-center flex items-center justify-center h-screen">
            {(!imageDetails)? 'Loading': 'loaded'}
            <div className="bg-gray-100 w-auto border-y-zinc-600 rounded-2xl p-6">

            <img src={imageDetails.url} alt="photoPreview" 
                    className=" ml-auto mr-auto rounded-2xl shadow-md"/>

            <h1 className="font-bold text-2xl m-3 mb-4">
                {imageDetails.id}
            </h1>
                <p className="">
                   <span className="font-bold text-xl">
                       {(imageDetails.name) && <span className="font-serif"> {imageDetails.name}</span> } 
                    </span>
                    
                    
                </p>
                <h1>
                    <a target="_blank" href={imageDetails.profileLink}>Go to Github Profile</a>
                </h1>
            </div>
            
        </div>
    )
}
export default ProfileDetails;
