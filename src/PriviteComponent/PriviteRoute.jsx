import React from 'react';
import useAuth from '../hook/useAuth';
import LoadingSpner from '../Component/LoadingSpner';
import { Navigate, useLocation } from 'react-router';

const PriviteRoute = ({children}) => {
    const {user , loading} = useAuth()
    const location = useLocation()
    //console.log(loading)
    if(loading) return <LoadingSpner></LoadingSpner>
     if(user){
         return (children);
     }
    // if( !user?.email)return <Navigate to={"/login"} state={location.pathname} replace></Navigate>
    return <Navigate to={"/login"} state={location.pathname} replace></Navigate>
};

export default PriviteRoute;