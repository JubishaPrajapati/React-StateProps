import React, {useState} from "react";

interface Person{
    name: string;
    age: number;
    location: string;
}

const UserinObj: React.FC =()=>{
    const [user,setUser]= useState<Person> ({name:"Ram" , age: 25 , location:"ktm"});

    const updateDetails=()=>{
        setUser({name: 'Shyam' , age: 50 , location: "pkr"});
    }

    return(
        <div>
            <h3>User Profile with objState </h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
            <button onClick={updateDetails}>Update User</button>
        </div>
    )
}
export default UserinObj;