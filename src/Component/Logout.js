import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Logout = () => {

    

    const navigate = useNavigate();
    //using promises
    useEffect(() =>{
        fetch('/logout', {
            method: "GET",
            headers:{
                Accept : "application/json",
                "Content-Teype" : "application/json"
            },
            credentials: "include"
        }).then((res) =>{
            navigate('/login');
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err)
        })
    })
  return (
    <div>
      <h1>logout page</h1>
    </div>
  )
}

export default Logout
