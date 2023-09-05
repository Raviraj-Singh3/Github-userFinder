import { useState } from "react";
import ProfileList from "./ProfileList";
import Search from "./Search";
import ProfileDetails from "./ProfileDetails";


export default function ProfileDex() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Search updateSearchTerm={setSearchTerm} />
            {(!searchTerm)? <ProfileList /> : < ProfileDetails key={searchTerm} profileName={searchTerm}/>}
            
        </div>
    )
}
