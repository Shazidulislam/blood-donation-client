import React, { useState } from 'react';
import animationData from '../../../assets/animation/login.json'
import Lottie from 'lottie-react';
import RegisterForm from '../../../Component/Form/RegisterForm';
import ProFirstButton from '../../../Component/Button/ProFirstButton';
import useAuth from '../../../hook/useAuth';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { createUserRecord, imageUpload } from '../../../api/utils';
import LoadingSpner from '../../../Component/LoadingSpner';

const Register = () => {
  const [error , setError] = useState("")
  const navigate = useNavigate()
  // context data
  const {createUser , updateUser , setUser  ,loading} = useAuth()
  if(loading)return <LoadingSpner/>

      const handleRegister = async (e) => {
  e.preventDefault();
  const form = e.target;

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.Confirm_Password.value;
  const image = form?.image?.files[0];
  const blood_group = form.blood_group.value;
  const district = form.district.value;
  const upazila = form.upazila.value;
  


  setError("");

  //  validations
  if (!name || !email || !password || !confirmPassword || !blood_group || !district || !upazila || !image) {
    return setError("Please fill out all fields and upload a profile image.");
  }
   //password validation
  if (password !== confirmPassword) {
    return setError("Password and Confirm Password do not match.");
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    return setError("Must have an Uppercase letter in the password.");
  }

  if (!/(?=.*[a-z])/.test(password)) {
    return setError("Must have a Lowercase letter in the password.");
  }

  if (!/(?=.*\d)/.test(password)) {
    return setError("Must have one number in the password.");
  }

  if (password.length < 6) {
    return setError("Password must be at least 6 characters long.");
  }
  //start tyr catch
  try {
    //file to image use imgbb
    const imageURL = await imageUpload(image);
    const submissionData = { name, email, blood_group, district, upazila, imageURL,  };
    console.log(submissionData);

    // Create user
    const result = await createUser(email, password);
   
    if (result.user) {
      // Update profile
      await updateUser({ displayName:name,photoURL:imageURL })
      setUser({
        ...result?.user,
        displayName:name,
        photoURL:imageURL
      })

      const userData = {
        name,
        email,
        photoURL:imageURL,
        blood_group,
        district_id:district,
        upazila
      }
      await createUserRecord(userData)
      // Success alert and reset form
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your account was created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      form.reset();
      navigate(location.state ? location.state : "/");
    }
  } catch (err) {
    setError(err.message);
  }
};


    return (
 <div className='bg-gray-300 lg:p-10 mx-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center bg-white max-w-7xl rounded-2xl p-4'>
                
                {/* login form */}
                <div className='flex-2 lg:flex lg:flex-col md:justify-center md:items-center '>
                 <div className=''>
                    <Link to={"/"}>
                              <ProFirstButton ></ProFirstButton>
                      </Link>
                 </div>
                 {/* form */}
                  <div className='lg:pt-20'>
                    <RegisterForm handleRegister={handleRegister}  error={error}></RegisterForm>
                  </div>
                </div>
                {/* animation */}
                <div className='flex-1/2  '>
                  <div className=' '>
                      <Lottie  animationData={animationData} loop={true} />
                  </div>
                </div>
            </div>
         </div> 
    );
};

export default Register;