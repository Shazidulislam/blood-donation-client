import React from 'react';
import DonationFrom from '../../../Component/Form/DonationRequestFrom/DonationFrom';
import useAxiousSecure from '../../../hook/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const CreateDonationRequext = () => {
    const axiosInstance = useAxiousSecure()
      const {mutate} = useMutation({
        mutationFn:async(bloodReuestData)=>{
           const {data} = axiosInstance.post("/donation-request", bloodReuestData )
           return data
        }, 
        onSuccess:(data)=>{
            console.log(data)
              toast.success("Your request done!")
        },
        onError:(err)=>{
            console.log(err)
            if(err){
                toast.error(err.message)
            }
        }
    })


    

    //handle donation
    const handleDonationSubmit=(e)=>{
       e.preventDefault()
       const form = e.target;
       const formData = new FormData(form)
       const bloodReuestData = Object.fromEntries(formData.entries())
       bloodReuestData.donation_status = "pending"
       console.log(bloodReuestData)
        mutate(bloodReuestData) 
        form.reset()
    }
    return (
        <div className='px-4 py-4 md:py-8 min-h-screen bg-gray-50'>
            <div className='bg-white px-4 py-8 rounded-lg shadow-lg transition scale-3d duration-150'>
               <h2 className='text-3xl font-bold text_primary '>Be a Donner</h2>
               <p className='text-gray-600 font-medium lg:w-7/12'>In someone’s darkest hour, your voice can spark hope. Request blood today be the reason someone lives tomorrow.</p>
                <div className='divider py-10'></div>
                <div>
                    <div>
                        <h2 className='text-xl font-bold text_primary'>Speak Hope, Save a Soul Today</h2>
                        
                    </div>
                    <DonationFrom handleDonationSubmit={handleDonationSubmit}></DonationFrom>
                </div>
            </div>
           
        </div>
    );
};

export default CreateDonationRequext;