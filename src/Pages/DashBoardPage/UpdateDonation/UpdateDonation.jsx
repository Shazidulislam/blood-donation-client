import React, {  useState } from 'react';
import useAuth from '../../../hook/useAuth';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { useRole } from '../../../hook/useRole';
import LoadingSpner from '../../../Component/LoadingSpner';
import useAxiousSecure from '../../../hook/useAxiosSecure';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

const UpdateDonation = () => {
    const {id} = useParams()
    // const [districtData , setDistrictData] = useState([])
    // const [upazilas ,setUpazilas ] = useState([])
    // const [selectedDistrictId, setSelectedDistrictId] = useState("")
    // const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const { user, loading , districtData , upazilas} = useAuth()
    const [time, setTime] = useState(null);
    const [status   ] = useRole()
    const axiosInstance = useAxiousSecure()
    const queryClient = useQueryClient()
          //update donation data
          const {mutate  } = useMutation({
              mutationFn:async(bloodReuestData)=>{
                 const {data} =await axiosInstance.put(`/donation-update/${id}`, bloodReuestData )
                 //console.log("inside data", data)
                 return data
              }, 
              onSuccess:(data)=>{
                  //console.log(data)
                  //console.log("outside data" , data)
                    toast.success("Your request Update successfully!")
                    queryClient.invalidateQueries({ queryKey: ['findDonation'] })
              },
              onError:(err)=>{
                  //console.log(err)
                  if(err){
                      toast.error(err.message)
                  }
              }
          })
          // get donation data  
        const {data , isLoading} = useQuery({
            queryKey:["findDonation" , id],
            queryFn:async()=>{
                const {data} = await axiosInstance(`/signgeDonation-data/${id}`)
                return data
             }
        })
        if(!user|| loading ||isLoading) return <LoadingSpner/>
      const handleDonationUpdate=(e)=>{
       e.preventDefault()
       const form = e.target;
       const formData = new FormData(form)
       const bloodReuestData = Object.fromEntries(formData.entries())
       bloodReuestData.donation_status = "pending"
       //console.log(bloodReuestData)
        mutate(bloodReuestData) 
    }

        //    useEffect(()=>{
    //         // refetch()
    //         fetch("../distric.json")
    //         .then(res=>res.json())
    //         .then(data=>{
    //             setDistrictData(data[2].data) 
    //             setMyLoading(false)
    //         })

    //         fetch("../Upazilas.json")
    //         .then(res=>res.json())
    //         .then(datas=>{
    //           setUpazilas(datas[2].data)
    //           setMyLoading(false)
    //         })

          
    //     },[selectedDistrictId , upazilas])
          
  

//     {
//     "_id": "688345c9be970e0a8233c240",
//     "requester_name": "Shazidul Islam",
//     "requester_email": "shazidulislam910@gmail.com",
//     "recipient_name": "Aspen Richards",
//     "district": "Coxsbazar",
//     "upazila": "Ruma",
//     "hospital_name": "Cole Harding",
//     "address": "Mollitia sapiente ad",
//     "blood_group": "A-",
//     "donation_date": "07/25/2025",
//     "donation_time": "2:30 PM",
//     "requester_message": "Laborum Tempora cul",
//     "donation_status": "pending",
//     "create_at": "2025-07-25T08:52:25.398Z",
//     "create_Donation_time": "02:52 PM"
// }
 
    const {requester_name , requester_email ,recipient_name , district , upazila , hospital_name ,address ,blood_group , donation_date , donation_time ,requester_message ,   } = data ||{}
    return (
        <div className='px-4 py-10'>
            <div>
                <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold  text-[#33929D]'>Modify Donation Info</h2>
            </div>
            <form onSubmit={handleDonationUpdate} >
                <div className='grid grid-cols-1 lg:grid-cols-2 space-x-3 pt-5 justify-center items-center'>
                    <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Requester Name</label>
                            <input type="text" value={requester_name} name="requester_name"  placeholder="User Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800" />
                    </fieldset>
                    <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Requester Email</label>
                            <input type="email" value={requester_email} name="requester_email"  placeholder="User Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800" />
                    </fieldset>
                    <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            < label htmlFor="name" className="block text-gray-400 text-sm">Recipient Name</label>
                            <input type="text" value={recipient_name} name="recipient_name"  placeholder="Recipient Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800" />
                    </fieldset>
                    <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Recipient District</label>
                             <select name="district" 
                            //    onChange={(e) => setSelectedDistrictId(e.target.value)}
                                defaultValue={district}
                                required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800">
                                    <option disabled={true}>Select Your Current District</option>
                                    {
                                        districtData.map((district)=>(
                                            <option key={district?.id} value={district?.name }>
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
                                        required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800"
                                        defaultValue={upazila}
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
                  {/* hospital name */}
                     <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Hospital Name</label>
                            <input type="text"  name="hospital_name" defaultValue={hospital_name} placeholder="Hospital Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800" />
                    </fieldset>     
                     <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Full Address Line</label>
                            <input type="text"  name="address" defaultValue={address}  placeholder=": ...Zahir Raihan Rd, Dhaka" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800" />
                    </fieldset>     
                    <fieldset className="fieldset  pt-2 w-xs pr-2   lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Blood Group </label>
                           <select name="blood_group" defaultValue={blood_group} required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800">
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
                            defaultValue={donation_date}
                             onChange={(date) => setStartDate(date)} 
                              name="donation_date" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800"
                             />;
                    </fieldset>    
                    <fieldset className="fieldset w-xs pr-2  lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Donation Time</label>
                            <DatePicker
                                    name='donation_time'
                                    defaultValue={donation_time}
                                    selected={time}
                                    onChange={(date) => setTime(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15} // time steps like 15 mins
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    class required className="w-full px-3 py-1 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800"
                            />
                    </fieldset>    
                </div>
                 <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-full  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Requester message</label>
                            <input type="text" defaultValue={requester_message} name="requester_message"  placeholder="Hospital Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800" />
                </fieldset>
                 <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-full  font-medium">
                  <button type='submit' className={`py-3 bg_primary text-center rounded-lg text-white lg:text-lg cursor-pointer  ${status==="active"?"cursor-pointer":"disabled:hover:cursor-not-allowed"}`} >Update Request</button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateDonation;
