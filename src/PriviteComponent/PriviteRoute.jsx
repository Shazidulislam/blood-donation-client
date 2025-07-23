import React from 'react';
import useAuth from '../hook/useAuth';
import LoadingSpner from '../Component/LoadingSpner';
import { Navigate, useLocation } from 'react-router';

const PriviteRoute = ({children}) => {
    const {user , loading} = useAuth()
    const location = useLocation()
    if(loading) return <LoadingSpner></LoadingSpner>
    if(!user || !user?.email)return <Navigate to={"/login"} state={location.pathname} replace></Navigate>
    return (children);
};

export default PriviteRoute;