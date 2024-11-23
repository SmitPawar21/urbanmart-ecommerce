import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const ProfilePage = ()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{

        const userId =  Cookies.get('user_id');

        const fetchUserDetails = async ()=>{
            await fetch('http://localhost:5000/username',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({user_id: userId})
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                setName(data.name);
                setEmail(data.email);
            }
            );
        }

        fetchUserDetails();
    },[])

    return (
        <div>
            <h5>{name}</h5>
            <p>{email}</p>
        </div>
    );

};