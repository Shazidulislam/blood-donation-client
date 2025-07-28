import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import LoadingSpner from '../../Component/LoadingSpner';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../hook/useAxiosSecure';

const SearchPage = () => {
    const {districtData ,upazilas, loading} = useAuth()
    const [selectedDistrictId, setSelectedDistrictId] = useState("")
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [district , setDistrict] = useState("")
    const [searchResult,setSearchResult] = useState([])
    const axiosInstance = useAxiousSecure()
    useEffect(()=>{
        
if(selectedDistrictId){
                const filtered  = upazilas.filter((upazila)=> upazila?.district_id ===selectedDistrictId )
                setFilteredUpazilas(filtered)
                }
                else{
                    setFilteredUpazilas([]);
                }
    },[selectedDistrictId , upazilas])
    //get data
    const {data , isLoading} = useQuery({
        queryKey:["searchDonation"],
        queryFn:async()=>{
            const {data} = await axiosInstance("/all-user-info")
            return data
        }
    })
    //handle search data
    const handleFromSubmit=(e)=>{
        e.preventDefault()
       const form = e.target;
         const districtName = district
         const blood_group = form.blood_group.value
         const upazila = form.upazila.value
          //filter data   
          const filteredDonors = data.filter(
                (user) =>
                    user.blood_group === blood_group &&
                    user.district_id === districtName &&
                    user.upazila === upazila
                );
              setSearchResult(filteredDonors);
    }
    console.log(searchResult )
    if(loading || isLoading) return <LoadingSpner/>
    return (
        <div className=' pt-1 rounded-xl'>
             <div className='bg-white px-4 py-6 flex flex-col justify-center items-center' >
                {/* search card */}
                <div className='p-4 border-b-4 border-l-4  border-red-500 rounded-b-2xl rounded-t-2xl'>
                    <h2 className=' text-2xl md:text-3xl text-red-500 font-semibold'>Blood Donor Search</h2>
                    <form onSubmit={handleFromSubmit}>
                        <fieldset className="fieldset  pt-2 w-xs pr-2   lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Blood Group </label>
                           <select name="blood_group" defaultValue={"Select A Group"} required className="w-full p-3 border-b-2 border-gray-500 hover:border-red-600 outline-none bg-white text-gray-800">
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
                     <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Recipient District</label>
                        <select name="district" 
                                 onChange={(e) => {
                                        const [ name,id] = e.target.value.split("|||");
                                       setSelectedDistrictId(id);
                                        setDistrict( name);
                                    }}
                                defaultValue="Select Your Current District" required className="w-full p-3 border-b-2 border-gray-500 hover:border-red-500 outline-none bg-white text-gray-800">
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
                                        required className="w-full p-3 border-b-2 border-gray-500 hover:border-red-500 outline-none bg-white text-gray-800"
                                        >
                                        <option value="">Select an upazila</option>
                                        {filteredUpazilas.map((upazila) => (
                                            <option key={upazila.id} value={upazila.name}>
                                            {upazila.name}
                                            </option>
                                        ))}
                                </select>
                    </fieldset>
                    <div className='flex justify-end'>
                        <button className='px-8 mt-4  rounded cursor-pointer py-2 bg-red-500 text-white'>Search</button>
                    </div>
                    </form>
                    
                </div>
               
                    
             </div>
             <div>
            {/* card */}
                {
                    searchResult.length === 0?"":
                    <>
                    <h2>Hell</h2>
                    </>                 
                }
            </div>
        </div>
    );
};

export default SearchPage;

// {
//     "_id": "688125ba1008253b317742be",
//     "name": "Shazidul Islam",
//     "email": "shazidulislam910@gmail.com",
//     "photoURL": "https://i.ibb.co/dwBYw58R/images-2.jpg",
//     "blood_group": "A+",
//     "district_id": "1",
//     "upazila": "Debidwar",
//     "role": "admin",
//     "status": "active",
//     "create_at": "2025-07-23T18:11:04.526Z",
//     "last_login": "2025-07-23T18:11:04.548Z"
// }