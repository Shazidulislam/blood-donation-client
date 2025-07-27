import { useQuery } from '@tanstack/react-query';
import React, {   } from 'react';
import useAuth from '../../../../hook/useAuth';
import LoadingSpner from '../../../LoadingSpner';
import useAxiousSecure from '../../../../hook/useAxiosSecure';
import { Link } from 'react-router';
import useUpdateDonationStatus from '../../../../api/useUpdateDonationStatus';

const Donationtable = () => {
     const {user , loading} = useAuth()
     const  axiosInstance= useAxiousSecure()
     const {mutate} = useUpdateDonationStatus() 
     // get data 
    const {data ,isLoading }=useQuery({
        queryKey:["recentDonation" ,user?.email ],
        queryFn:async()=>{
            const {data} = await axiosInstance(`/recent-donation/${user?.email}`)
            return data
        }
    })



    
  


    // console.log(districIdAndDivition ,findDistricName )
    if(loading|| isLoading) return <LoadingSpner/> 
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            {
                data?.length === 0 ? "":<> <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                    <colgroup>
                        <col className="w-5" />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-5" />
                    </colgroup>
                    <thead>
                        <tr className="dark:bg-gray-300 border-b-2 border-gray-400">
                            <th className="p-3">Recipient</th>
                            <th className="p-3">Location</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Blood Group</th>
                            <th className="p-3">Address</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Donor Info</th>
                            <th className="p-3">
                                {/* <span className="sr-only">Actions</span> */}Actions
                            </th>
                        </tr>
                         
                    </thead>

                    
                   {
                    data?.length=== 0 ?"": data.map((donation)=> <tbody key={donation?._id} className="border-b border-b-gray-400 dark:bg-gray-50 dark:border-gray-300">
                        <tr>
                            <td className="px-3 py-2">{donation?.recipient_name}</td>
                            <td className="px-3 py-2">
                                <p>{donation?.district}</p>
                                <p>{donation?.upazila}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p className="dark:text-gray-600">{donation?.donation_date}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p>{donation?.donation_time}</p>
                            </td>

                            <td className="px-3 py-2">
                                <p>{donation?.blood_group}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p className="dark:text-gray-600">{donation?.address}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p className="dark:text-gray-600">{donation?.donation_status}</p>
                            </td>
                            <td className="px-3 py-2">
                               {
                                donation?.donation_status === "" ?<>
                                <p className="dark:text-gray-600">{donation?.requester_name}</p>
                                <p className="dark:text-gray-600">{donation?.requester_email}</p>
                                </>: <p className="dark:text-gray-600">"N/A"</p>
                                 
                               }
                            </td>
                            <td className="px-3 py-2">
                                <div className='space-x-2'>
                                    {/* click the button whene status is inprogress , after click status is done */}
                                    {
                                     donation?.donation_status==="inprogress"&& <button onClick={()=>mutate({
                                        id:donation._id, 
                                        status:"done"
                                     })} className='px-3 py-1 cursor-pointer bg-[#33929D] rounded-full text-white' > Done</button>
                                    }
                                    {/* cancled the status */}
                                    {
                                     donation?.donation_status==="inprogress"&& <button onClick={()=>mutate({
                                        id:donation._id , 
                                        status:"canceled"
                                     })} className='px-3 py-1 cursor-pointer bg-[#33929D] rounded-full text-white'>Cancle</button>
                                    }
                                    {/* edit it request */}
                                    <Link to={`/dashboard/edit-donation/${donation?._id}`}  className='px-3 py-1 bg-[#33929D] rounded-full text-white' >Edit</Link>
                                    {/* delete thi requst */}
                                    <button  onClick={()=>mutate({
                                        id:donation._id , 
                                        status:"delete"
                                     })}  className='px-3 py-1 bg-[#33929D] cursor-pointer rounded-full text-white' >Delete </button>
                                    <Link to={`/dashboard/diatils/${donation?._id}`} className='px-3 py-1 bg-[#33929D] rounded-full text-white'>Details</Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>)
                   }
                   
                </table>
            </div></>
            }
        </div>
    );
};

export default Donationtable;