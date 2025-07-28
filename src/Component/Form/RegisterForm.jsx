import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../hook/useAuth';
import { TbFidgetSpinner } from 'react-icons/tb';
const RegisterForm = ({handleRegister , error , setSelectDistrict}) => {
    const {districtData ,upazilas, loading} = useAuth()
    const [selectedDistrictId, setSelectedDistrictId] = useState("")
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  

    
        useEffect(()=>{
            
                  if(selectedDistrictId){
                    const filtered  = upazilas.filter((upazila)=> upazila?.district_id ===selectedDistrictId )
                    setFilteredUpazilas(filtered)
                    }
                    else{
                        setFilteredUpazilas([]);
                    }
        },[selectedDistrictId , upazilas])


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
                          <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Recipient District</label>
                        <select  
                                 onChange={(e) => {
                                        const [ name,id] = e.target.value.split("|||");
                                       setSelectedDistrictId(id);
                                        setSelectDistrict( name);
                                    }}
                                defaultValue="Select Your Current District" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#33929D] outline-none bg-white text-gray-800">
                                    <option disabled={true}>Select Your Current District</option>
                                    {
                                        districtData.map((district)=>(
                                            <option key={district?.id} value={`${district?.name}|||${district?.id}` }>
                                                {district?.name}
                                            </option>
                                        ))
                                    }
                        </select>
                    </fieldset>
                      {/* selected upazila start */}
                    <fieldset className="fieldset w-xs pr-2   pt-2  lg:w-lg">
                               <label htmlFor="name" className="block text-gray-400 text-sm">Recipient Upazila</label>
                                <select name="upazila"
                                        required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#33929D] outline-none bg-white text-gray-800"
                                        >
                                        <option value="">Select an upazila</option>
                                        {filteredUpazilas.map((upazila) => (
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