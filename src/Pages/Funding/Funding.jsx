import React, { useState } from 'react';
import PurchaseModal from '../../Component/Modal/PurchaseModal';
import { useQuery } from '@tanstack/react-query';
import LoadingSpner from '../../Component/LoadingSpner';
import useAxiousSecure from '../../hook/useAxiosSecure';
import FunDingTable from '../../Component/Sheard/DashbordMenu/Table/FunDingTable';
import Sidespace from '../../Component/Sidespace/Sidespace';





const Funding = () => {
    const axiosInstance = useAxiousSecure()
     let [isOpen, setIsOpen] = useState(false)
     const closeModal= ()=>{
         setIsOpen(false)
     }


     const {data , isLoading , refetch} = useQuery({
        queryKey:["funding"],
        queryFn:async()=>{
             const {data} = await axiosInstance("/blood-fund-donatio")
             return data
        }
     })
     //console.log(data)
    if(isLoading) return <LoadingSpner/>
    return (
        <Sidespace>
        <div className='py-10' >
            <div className='grid grid-cols-12' >
               <div className='col-span-10' >
                    <h2 className='text-3xl md:text-5xl font-bold text-[#D25D5D] py-2'>Small act, big change</h2>
                    <p className='text-gray-500 font-medium lg:w-7/12' >Be the Reason Change Happens .View donations and make your impact through secure payments.</p>
               </div>

               <div className='col-span-2' >
                <button  onClick={()=>setIsOpen(true)} className='px-4 lg:px-8 text-xs md:text-lg py-2 lg:py-3 rounded shadow-lg cursor-pointer  bg-[#D25D5D] hover:bg-[#B9375D] transition-colors transform duration-300  text-white'>Donnet</button>
               </div>
            </div>
            <div>
        </div>
        {
            data?.length === 0 ?"": <FunDingTable data={data} ></FunDingTable>
        }
        
       
        {/*  */}
        <div>
           <PurchaseModal closeModal={closeModal} isOpen={isOpen} refetch={refetch} ></PurchaseModal> 
        </div>
        </div>
        </Sidespace>
    );
};

export default Funding;