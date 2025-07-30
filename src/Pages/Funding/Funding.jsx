import React, { useState } from 'react';
import PurchaseModal from '../../Component/Modal/PurchaseModal';



const Funding = () => {
    console.log(import.meta.env.VITE_STRIPE_PAYMENT_PK_KEY)
     let [isOpen, setIsOpen] = useState(false)
     const closeModal= ()=>{
         setIsOpen(false)
     }
    return (
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
        <h2>Helllllllllllllllll</h2>
       
        {/*  */}
        <div>
           <PurchaseModal closeModal={closeModal} isOpen={isOpen}  ></PurchaseModal> 
        </div>
        </div>
    );
};

export default Funding;