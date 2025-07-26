import React, {   } from 'react';
import { Link } from 'react-router';
import useAuth from '../../hook/useAuth';
import { TbFidgetSpinner } from 'react-icons/tb';
const RegisterForm = ({handleRegister , error}) => {
    const {upazilas , districtData , loading} = useAuth()


    return ( 
      
        <div>
        <div className='md:py-5  color-theme'>
          <div className="w-full  md:w-xl p-4 rounded-md shadow sm:p-8 bg-gray-100 mx-auto text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Sign up to your account</h2>
                <p className="text-sm text-center font-medium text-gray-600"> Already have an account?
                   <Link to={"/login"} className='text-blue-500 hover:underline'>SignIn</Link>
                </p>
             
                <div className="flex items-center w-full my-4">
                    <hr  className="w-full text-gray-600" />
                  
                    <hr  className="w-full text-gray-600" />
                </div>
                <form onSubmit={handleRegister} className="space-y-3">
                        <fieldset className="fieldset w-xs md:w-lg  font-medium">
                            <label htmlFor="name" className="block text-sm">Name</label>
                            <input type="text" name="name"  placeholder="User Name" className="w-full p-3 rounded outline-none bg-white shadow text-gray-800" />
                       </fieldset>
                        <fieldset className="fieldset w-xs md:w-lg  font-medium">
                            <label htmlFor="email" className="block text-sm">Email</label>
                            <input type="email" name="email"  placeholder="User Name" className="w-full p-3 rounded outline-none bg-white shadow text-gray-800" />
                       </fieldset>
                        <fieldset className="fieldset w-xs  md:w-lg  font-medium">
                            <label  className="block text-sm font-medium">Image</label>
                            <input type='file'
                             id='image'
                             name='image'
                             accept='image/*'
                            className="w-full p-3 rounded outline-none bg-white shadow text-gray-800" />
                       </fieldset>
                       <fieldset className="fieldset  w-xs md:w-lg">
                        <legend className="fieldset-legend">Blood group</legend>
                        <select name="blood_group" defaultValue={"Select A Group"} className="w-full p-3 rounded outline-none bg-white shadow text-gray-800">
                            <option disabled={true}>Select A Group</option>
                            <option value={"A+"}>A+</option>
                            <option value={"B+"}>B+</option>
                            <option value={"AB+"}>AB+</option>
                            <option value={"O+"}>O+</option>
                            <option value={"AB-"}>AB-</option>
                            <option value={"A-"}>A-</option>
                            <option value={"B-"}>B-</option>
                            <option value={"O-"}>O-</option>
                        </select>
                        </fieldset>
                        {/* selected district start */}
                          <fieldset className="fieldset  w-xs md:w-lg">
                                <legend className="fieldset-legend">Your District</legend>
                                <select name="district" 
                                defaultValue="Select Your Current District" className="w-full p-3 rounded outline-none bg-white shadow text-gray-800">
                                    <option disabled={true}>Select Your Current District</option>
                                    {
                                        districtData.map((district)=>(
                                            <option key={district?.id} value={district?.name}>
                                                {district?.name}
                                            </option>
                                        ))
                                    }
                                </select>
                          </fieldset>
                        {/* selected district end */}
                        {/* selected upazila start */}
                          <fieldset className="fieldset  w-xs md:w-lg">
                                <legend className="fieldset-legend">Your current Upazila</legend>
                                <select name="upazila"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                       
                                        >
                                        <option value="">Select an upazila</option>
                                        {upazilas.map((upazila) => (
                                            <option key={upazila.id} value={upazila.name}>
                                            {upazila.name}
                                            </option>
                                        ))}
                                </select>
                          </fieldset>
                        {/* selected upazila end */}
                        {/* password */}
                        <fieldset className="fieldset w-xs md:w-lg  font-medium">
                            <label  className="block text-sm">Password</label>
                            <input type="password" name="password"  placeholder="***********" className="w-full p-3 rounded outline-none bg-white shadow text-gray-800" />
                       </fieldset>
                       {/* Confirm Password */}
                        <fieldset className="fieldset w-xs md:w-lg  font-medium">
                            <label className="block text-sm">Confirm Password</label>
                            <input type="password" name="Confirm_Password"  placeholder="***********" className="w-full p-3 rounded outline-none bg-white shadow text-gray-800" />
                       </fieldset>
                        <fieldset className="fieldset w-xs md:w-lg  ">
                          <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#03464D] cursor-pointer text-gray-100">
                            {loading?(<TbFidgetSpinner className='animate-spin m-auto'/>):("Continue")}
                          </button>
                       </fieldset>
                       {
                        error && <p className='text-error'>{error}</p>
                       }
                </form>
            </div>
        </div>
        </div>
    );
};

export default RegisterForm;