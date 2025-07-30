import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import useAuth from '../../hook/useAuth';
import LoadingSpner from '../LoadingSpner';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../../Component/Form/PaymentForm.jsx';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_PK_KEY);



const  PurchaseModal=({closeModal , isOpen})=>{
  const {user , loading} = useAuth()

  console.log(user)

  const [donnetAmmount , setDonnetAmount] = useState(1)
  const [donationData , setDonationData] = useState({
    donner:user?.displayName,
    email:user?.email,
    image:user?.photoURL,
  })
  console.log(donationData)

  const handleQunatity=(value)=>{
    const totalDonation = parseInt(value)
   setDonnetAmount(parseFloat(totalDonation))
   setDonationData(prev=>{
    return{
      ...prev,
      donation:totalDonation,
    }
   })
  }
 


  if(loading) return <LoadingSpner/>
  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded bg-[#D9A299] text-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
             <div>
              <h2 className='text-xl font-semibold flex items-center gap-2 mb-5' > <span className='text-[#B9375D]'><FaHeart/></span><span> Hey, ready to make a difference?</span></h2>
              <p className='text-xs text-center py-2' >Your generous donation will transform lives and bring hope to our community. Every dollar counts!</p>
              <p className='text-center text-sm pb-3'>60% of our $10,000 goal reached!</p>
              <div>
                <p>Name : {user?.displayName}</p>
                <p>Email : {user?.email}</p>
              </div>
              <div className='divider' ></div>
              
              <div className='flex justify-between items-center'>
                <fieldset className="fieldset  pr-2 pt-2  font-medium">
                    <label htmlFor="name" className="block ">Donatin Info</label>
                            <input type="number" min={1} value={donnetAmmount} onChange={(e)=>handleQunatity(e.target.value)} placeholder='Enter your amount' required className=" w-36 p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                </fieldset>
                <div className=' divider divider-horizontal' > </div>
                 <div>
                  <p>Total Donation : {donnetAmmount}</p> 
                 </div>
              </div>
             </div>
             <div className=''>
                 <Elements stripe={stripePromise}>
                      <PaymentForm donnetAmmount={donnetAmmount} closeModal={closeModal} donationData={donationData} ></PaymentForm>
                </Elements>
            </div>  
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default PurchaseModal;