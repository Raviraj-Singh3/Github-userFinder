import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
function ProfileDetails(){
    const [imageDetails, setImageDetails] = useState({})
    const {id} = useParams()
    console.log("login id",id)

    async function downloadPhotos(){
        const response = await axios.get(`https://api.github.com/users/${id}`);
        console.log(response.data)
        const responseData = response.data;

        setImageDetails({
            name: responseData.name,
            url: responseData.avatar_url,
            id: responseData.login
        })
            
        console.log("imagew",imageDetails)
    }
    useEffect(()=>{
        downloadPhotos()
    },[])

    return(
        <div className="text-center flex items-center justify-center h-screen">
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
            </div>
            
        </div>
    )
}
export default ProfileDetails;
