import React, {  useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';
import LoadingSpner from '../../LoadingSpner';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { useRole } from '../../../hook/useRole';

const DonationFrom = ({handleDonationSubmit , setDistrict}) => {
     const {districtData ,upazilas, loading ,user} = useAuth()
    const [selectedDistrictId, setSelectedDistrictId] = useState("")
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    // const [myLoading , setMyLoading ]= useState(true)
    const [time, setTime] = useState(null);
    const [ role ,  status ,roleLoading   ] = useRole()
    
       console.log(role)
       useEffect(()=>{
           

              if(selectedDistrictId){
                const filtered  = upazilas.filter((upazila)=> upazila?.district_id ===selectedDistrictId )
                setFilteredUpazilas(filtered)
                }
                else{
                    setFilteredUpazilas([]);
                }
        },[selectedDistrictId , upazilas])
          
    if(loading || roleLoading ) return <LoadingSpner/>
    
    return (
        <div>
            <form onSubmit={handleDonationSubmit} >
                <div className='grid grid-cols-1 lg:grid-cols-2 space-x-3 pt-5 justify-center items-center'>
                    <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Requester Name</label>
                            <input type="text" value={user?.displayName} name="requester_name"  placeholder="User Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                    </fieldset>
                    <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Requester Email</label>
                            <input type="email" value={user?.email} name="requester_email"  placeholder="User Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                    </fieldset>
                    <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            < label htmlFor="name" className="block text-gray-400 text-sm">Recipient Name</label>
                            <input type="text"  name="recipient_name"  placeholder="Recipient Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                    </fieldset>
                       <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Recipient District</label>
                        <select 
                                 onChange={(e) => {
                                        const [ name,id] = e.target.value.split("|||");
                                       setSelectedDistrictId(id);
                                        setDistrict( name);
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
                  {/* hospital name */}
                     <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Hospital Name</label>
                            <input type="text"  name="hospital_name"  placeholder="Hospital Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                    </fieldset>     
                     <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Full Address Line</label>
                            <input type="text"  name="address"  placeholder=": ...Zahir Raihan Rd, Dhaka" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                    </fieldset>     
                    <fieldset className="fieldset  pt-2 w-xs pr-2   lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Blood Group </label>
                           <select name="blood_group" defaultValue={"Select A Group"} required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800">
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
                            <label htmlFor="name" className="block text-gray-400 text-sm">Donation Date</label>
                            <DatePicker 
                            selected={startDate}
                             onChange={(date) => setStartDate(date)} 
                              name="donation_date" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
                             />;
                    </fieldset>    
                    <fieldset className="fieldset w-xs pr-2  lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Donation Time</label>
                            <DatePicker
                                    name='donation_time'
                                    selected={time}
                                    onChange={(date) => setTime(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15} // time steps like 15 mins
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    class required className="w-full px-3 py-1 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
                            />
                    </fieldset>    
                </div>
                 <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-full  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Requester message</label>
                            <input type="text"  name="requester_message"  placeholder="Hospital Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                </fieldset>
                 <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-full  font-medium">
                  <button type='submit' className={`py-3 bg-[#D25D5D] text-center rounded-lg text-white lg:text-lg cursor-pointer  ${status==="active"?"cursor-pointer":"disabled:hover:cursor-not-allowed"}`} >Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default DonationFrom;