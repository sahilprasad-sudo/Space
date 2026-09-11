import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoutes = ({children}) => {

    let isAdmin=false;

    if(!isAdmin){
       return <Navigate to={'/home'}/>
         console.log("Hey I'm Running")
    }


  return children
}

export default ProtectedRoutes
