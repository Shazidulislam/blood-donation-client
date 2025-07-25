import React, {  } from 'react';
import { useParams } from 'react-router';
import useAxiousSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpner from '../../../Component/LoadingSpner';

const DonationDitails = () => {
    const {id} = useParams()
         const  axiosInstance= useAxiousSecure()
         // get data 
     const {data ,isLoading }=useQuery({
            queryKey:["donationDeatils" ,id ],
            queryFn:async()=>{
                const {data} = await axiosInstance(`/donation-deatils/${id}`)
                return data
            }
        })
        console.log(data)
        const {recipient_name , hospital_name ,requester_name  ,district, upazila , blood_group, donation_status , donation_date , donation_time ,requester_email  } = data||{}
    if(isLoading) return <LoadingSpner/>
    return (
        <div className='px-4 py-10 bg-gray-50 space-y-5'>
            <div className='bg-white px-4 py-10 rounded-lg shadow-lg'>
               <h2 className='text_primary text-2xl md:text-4xl lg:text-5xl font-bold'>Donation Request Details</h2>
               <p className='text-lg font-medium text-gray-400 pt-3'>View the full details of your blood donation request</p>
               <div className='divider'></div>
               <h2 className='text-xl md:text-2xl font-bold text_primary'>Request Information</h2>
               {/* donation info */}
               <div className='md:flex md:justify-around pt-5 space-y-4'>
                {/* left */}
                <div className='space-y-4'>
                    <p className='space-x-2 flex flex-col '>
                       <span  className='text-gray-500 text-lg'> Recipient Name :</span>
                        <span className='text-gray-900 '>{recipient_name}</span>
                    </p>
                    <p className='space-x-2 flex flex-col'>
                       <span  className='text-gray-500 text-lg'>Donation Date:</span>
                        <span className='text-gray-900 '>{donation_date}</span>
                    </p>
                    <p className='space-x-2 flex flex-col'>
                       <span  className='text-gray-500 text-lg'> Blood Group :</span>
                        <span className='text-gray-900 '>{blood_group}</span>
                    </p>
                    <p className='space-x-2 flex flex-col'>
                       <span  className='text-gray-500 text-lg'>Donation Status</span>
                        <span className='text-gray-900 '>{donation_status}</span>
                    </p>

                </div>
                {/* right */}
                <div  className='space-y-4 '>
                    <p className='space-x-2 flex flex-col'>
                       <span  className='text-gray-500 text-lg'> Recipient Location :</span>
                        <span className='text-gray-900 '>{district} , {upazila}</span>
                    </p>
                    <p className='space-x-2 flex flex-col'>
                       <span  className='text-gray-500 text-lg'> Hospital Name  :</span>
                        <span className='text-gray-900 '>{hospital_name}</span>
                    </p>
                    <p className='space-x-2 flex flex-col'>
                       <span  className='text-gray-500 text-lg'>  Donation Time :</span>
                        <span className='text-gray-900 '>{donation_time}</span>
                    </p>
                    <p className='space-x-2 flex flex-col'>
                       <span  className='text-gray-500 text-lg'> Donor Information :</span>
                        <span className='text-gray-900 '>{requester_name}</span>
                        <p  className='text-gray-900 '>{requester_email}</p>
                    </p>
                   
                </div>
               </div>    
            </div>
        </div>
    );
};

export default DonationDitails;



// /***
//  * {
//     "_id": "688342dfdc12b5e8ceeaac8c",
//     "requester_name": "Shazidul Islam",
//     "requester_email": "shazidulislam910@gmail.com",
//     "recipient_name": "Anne Holcomb",
//     "district": "56",
//     "upazila": "Jaldhaka",
//     "hospital_name": "Armando Berger",
//     "address": "Voluptatibus molliti",
//     "blood_group": "B+",
//     "donation_date": "08/02/2025",
//     "donation_time": "9:00 PM",
//     "requester_message": "Nulla et nostrum tot",
//     "donation_status": "pending",
//     "create_at": "2025-07-25T08:39:59.319Z",
//     "create_Donation_time": "02:39 PM"
// }
//  * /