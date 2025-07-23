import React from 'react';
import LoadingSpner from '../../../../Component/LoadingSpner';
import useAuth from '../../../../hook/useAuth';
import coverPotho from '../../../../assets/banner/cover.jpg'

const UserProfile = () => {
     const  { user , loading} = useAuth()
     console.log(user)
    if(loading) return <LoadingSpner></LoadingSpner>
    return (
        <div className='px-20 mx-auto'>
            <figure className='relative'>
                <img src={coverPotho} className='rounded-b-2xl' alt="" />
                 <img src={user?.po} alt="" />
            </figure>
        </div>
    );
};

export default UserProfile;