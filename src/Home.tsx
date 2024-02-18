import React from 'react'
import {useLocation} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  var navigate=useNavigate();
  React.useEffect(()=>{
   
     var token=localStorage.getItem('token');
     console.log(token);
         axios.post("http://localhost:3030/getusers",{data:1},{withCredentials: true,headers:{Authorization : 'Bearer '+token}}).then((res)=>{
        if(res.data.err_id===1){
          localStorage.removeItem('token');
    navigate("/");
        }
    })
  },[navigate])
    console.log(useLocation())
  return (
    <div>Home</div>
  )
}

export default Home

