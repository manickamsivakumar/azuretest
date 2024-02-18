import React, { useState } from 'react';

import './App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Button,
  FormHelperText, Input
} from '@chakra-ui/react';
type User = {
  "email": string,
  "password"?: string,
  "token"?: string
}
type Res = {
  "err_id": number,
  "err_msg": string,
  "data"?: User
}

function App() {
  var navigate = useNavigate();
  const [cred, setCred] = useState<User>({ "email": "", "password": "" });
  const submitform = () => {
    axios.post<Res>("http://localhost:3030/login", cred).then((res) => {
      if (!res.data.err_id) {
        if (res.data.data) {
          console.log(res.data.data);
          localStorage.setItem("token", res.data.data['token'] as string)
          navigate("/home", { state: { name: res.data.data['email'] } })

        }
      } else {
        alert(res.data.err_msg);
      }
    })
  }
  const googleapi=()=>{
    axios.get("http://localhost:3030/Oauthreq").then((res)=>{
        console.log(res.data.url)
        window.location.href=res.data.url;
    })
  }
  return (
    <div className="App">
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' onChange={(e) => { setCred({ ...cred, "email": e.target.value }) }} value={cred.email} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>password</FormLabel>
        <Input type='password' onChange={(e) => { setCred({ ...cred, "password": e.target.value }) }} value={cred.password} />
        <FormHelperText>We'll never share your password.</FormHelperText>
      </FormControl>
      <Button colorScheme='blue' onClick={() => submitform()}>Button</Button>
      <Button colorScheme='blue' onClick={() => googleapi()}>Google Sign-In</Button>
    </div>
  );
}

export default App;
