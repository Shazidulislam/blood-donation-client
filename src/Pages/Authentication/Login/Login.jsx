import React from 'react';
import ProFirstButton from '../../../Component/Button/ProFirstButton';
import animationData from '../../../assets/animation/login.json'
import Lottie from 'lottie-react';
import LoginForm from '../../../Component/Form/LoginForm';
const Login = () => {
    return (
         <div className='bg-gray-300 lg:p-10'>
            <div className='flex flex-col md:flex-row justify-center items-center bg-white max-w-7xl rounded-2xl p-4'>
                
                {/* login form */}
                <div className='flex-1 md:flex md:justify-start md:items-start '>
                 <div className=''>
                    <ProFirstButton></ProFirstButton>
                 </div>
                 {/* form */}
                  <div className='pt-20 lg:pl-20'>
                     <LoginForm></LoginForm>
                  </div>
                </div>
                {/* animation */}
                <div className='flex-1 md:flex-none lg:pr-28 '>
                  <div className='md:w-64 lg:w-full'>
                      <Lottie  animationData={animationData} loop={true} />
                  </div>
                </div>
            </div>
         </div> 
    );
};

export default Login;