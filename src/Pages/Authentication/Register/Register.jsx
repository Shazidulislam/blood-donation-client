import React, { useState } from 'react';
import animationData from '../../../assets/animation/login.json'
import Lottie from 'lottie-react';
import RegisterForm from '../../../Component/Form/RegisterForm';
import ProFirstButton from '../../../Component/Button/ProFirstButton';
import useAuth from '../../../hook/useAuth';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { imageUpload } from '../../../api/utils';

const Register = () => {
  const [error , setError] = useState("")
  // context data
  const {createUser , updateUserProfile , setUser , user} = useAuth()

  const navigate = useNavigate()



      const handleRegister= async(e)=>{
        e.preventDefault()
        const form = e.target;
         const name = form.name.value
         const email = form.email.value
         const password = form.password.value
         const image = form?.image?.files[0];
         const blood_group = form.blood_group.value;
         const district = form.district.value;
         const upazila = form.upazila.value;
         const Confirm_Password = form.Confirm_Password.value;
        
        //  
         const imageURL= await imageUpload(image)
        

        setError("")
        // create user with email and password
       
       const submisionData = {name , email  , blood_group , district ,upazila  , imageURL }
       console.log(submisionData)

        if(!/(?=.*[A-Z])/.test(password)){
            return setError("Must have an Uppercase letter in the password")
        }
        if(!/(?=.*[a-z])/.test(password)){
            return setError("Must have a Lowercase letter in the password ")
        }
        if(!/(?=.*\d)/.test(password)){
            return setError("Must have one number in the password")
        }
        if(!/.{6}/.test(password)){
            return setError("Password length must be at least 6 character")
        }
       
         createUser(email ,password )
        .then((result)=>{
            
            updateUserProfile({name , imageURL})
            setUser({...user , displayName :name , photoURL:imageURL})
             if(result.user){
             Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account create successfully!.",
            showConfirmButton: false,
            timer: 1500,

            });
           e.target.reset()
            navigate(`${location.state ? location.state :"/"}`)
           }
        })
        .catch(errors=>{
         setError(errors.message)
         })
        }

    return (
 <div className='bg-gray-300 lg:p-10'>
            <div className='flex flex-col md:flex-row justify-center items-center bg-white max-w-7xl rounded-2xl p-4'>
                
                {/* login form */}
                <div className='flex-2 md:flex md:justify-start md:items-start '>
                 <div className=''>
                    <ProFirstButton></ProFirstButton>
                 </div>
                 {/* form */}
                  <div className='pt-20 '>
                    <RegisterForm handleRegister={handleRegister}  error={error}></RegisterForm>
                  </div>
                </div>
                {/* animation */}
                <div className='flex-1/2 md:flex-none lg:pr-20 '>
                  <div className='md:w-64 lg:w-full'>
                      <Lottie  animationData={animationData} loop={true} />
                  </div>
                </div>
            </div>
         </div> 
    );
};

export default Register;