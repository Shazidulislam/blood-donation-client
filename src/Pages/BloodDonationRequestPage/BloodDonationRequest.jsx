import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousSecure from '../../hook/useAxiosSecure';
import LoadingSpner from '../../Component/LoadingSpner';
import DonationCard from '../../Context/Card/DonationCard';

const BloodDonationRequest = () => {
      const axiosInstance = useAxiousSecure()
      const {data ,isLoading }=useQuery({
        queryKey:["publicDonation" ],
        queryFn:async()=>{
            const {data} = await axiosInstance(`/admin-all-donation`, {
                
            })
            return data
        }
    })

    const filterDonation = data?.filter((donation)=>donation?.donation_status=== "pending")
     console.log(data)


    if(isLoading)return <LoadingSpner/>

    return (
       <div>
           <h2 className='text-2xl md:text-4xl font-semibold py-10 text-center text-[#D25D5D]'>Active Blood Donation Requests</h2>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-4 py-2'>
                {
                    filterDonation?.map(donation=><DonationCard key={donation?._id} donation={donation} ></DonationCard>)
                }
            </div>
       </div>
    );
};

export default BloodDonationRequest;