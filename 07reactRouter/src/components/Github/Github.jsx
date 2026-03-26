import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";



function Github(){
    const data = useLoaderData();
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Sachinsingh198")
    //         .then(response => response.json())
    //         .then(data =>{
    //             console.log(data);
    //             setData(data);
    //         })
    // }, []);

    return(
        <div className="bg-gray-600 text-white text-xl text-center">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default Github;

export const githubInfoLoaer = async () => {
    const response = await  fetch("https://api.github.com/users/Sachinsingh198");
    return response.json();
}