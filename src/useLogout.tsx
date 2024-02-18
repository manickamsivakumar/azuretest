import React from 'react'
import { useNavigate } from 'react-router-dom'
const useLogout = () => {
  const navigate=useNavigate();
    localStorage.removeItem('token');
    navigate("/");
}

export default useLogout
