import { useState } from "react";
import ProfileList from "./ProfileList";
import Search from "./Search";


export default function ProfileDex() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Search updateSearchTerm={setSearchTerm} />
            {searchTerm}
            {(searchTerm.length == 0)? <ProfileList /> : ''}
            
        </div>
    )
}
