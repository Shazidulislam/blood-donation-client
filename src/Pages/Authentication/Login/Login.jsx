import React from 'react';
import ProFirstButton from '../../../Component/Button/ProFirstButton';
import animationData from '../../../assets/animation/login.json'
import Lottie from 'lottie-react';
import LoginForm from '../../../Component/Form/LoginForm';
import useAuth from '../../../hook/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import LoadingSpner from '../../../Component/LoadingSpner';
import { createUserRecord } from '../../../api/utils';
const Login = () => {

  const { signIn,  loading, } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

  if(loading) return <LoadingSpner/>

    const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

         try{
           const result = await  signIn(email , password)
           if(result.user){
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account login successfully!.",
            showConfirmButton: false,
            timer: 1500
            });
            const userData={
              name:result?.user?.displayName,
              enail:result?.user?.email,
              photoURL:result?.user?.photoURL
            }
            await createUserRecord(userData)
            e.target.reset()
            navigate(`${location.state ? location.state :"/"}`)
            }
          }
          catch(err){
                  //console.log(err)
                  toast.error(err)
          }
  } 

    return (
         <div className='bg-gray-300 lg:p-10'>
            <div className='flex flex-col md:flex-row justify-center items-center bg-white max-w-7xl rounded-2xl p-4'>
                
                {/* login form */}
                <div className='flex-1 md:flex md:justify-start md:items-start '>
                 <div className=''>
                     <Link to={"/"}>
                              <ProFirstButton ></ProFirstButton>
                      </Link>
                 </div>
                 {/* form */}
                  <div className='pt-20 lg:pl-20'>
                     <LoginForm handleSubmit={handleSubmit}></LoginForm>
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