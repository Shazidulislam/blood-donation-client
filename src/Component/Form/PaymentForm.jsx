import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import './paymentForm.css'
import toast from 'react-hot-toast';
import { BarLoader } from 'react-spinners';
import { useMutation } from '@tanstack/react-query';
import useAxiousSecure from '../../hook/useAxiosSecure';
import useAuth from '../../hook/useAuth';

const PaymentForm = ({donnetAmmount , closeModal , donationData}) => {
  const {user} = useAuth()  
 const stripe = useStripe();
  const elements = useElements();
  const [cardError , setCardError] = useState(null);
  const [cardProssesing , setCardProssesing] =useState(false);
  const axiosInstance = useAxiousSecure()
  const [clientSecret ,  setClientSecret ] = useState("")

   const {mutate } =useMutation({
    mutationFn:async(donationData)=>{
      const {data} = await axiosInstance.post("/create-payment-intent" ,donationData )
    
      return data
    },
    onSuccess:(data)=>{
        console.log(data)
      if(data?.client_secret){
        setClientSecret(data?.client_secret)
      }
       
    },
    onError:(err)=>{
        console.log(err)
    }
   })
   
   console.log(clientSecret)

   useEffect(()=>{
    mutate(donationData)
   },[donationData , mutate])

  const handleSubmit = async (event) => {
    setCardProssesing(true)
   
    // Block native form submission.
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
        setCardError(error.message)
        toast.error(error.message)
        setCardProssesing(false)
        return 
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError(null)
    }



        const result =  await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                card,
                billing_details: {
                name:user?.displayName,
                email:user?.email,
            },
        },
        })

      console.log(result)  
      if(result?.error){
           setCardError(result?.error?.message)
            return   
      }
      if(result?.paymentIntent?.status === "succeeded" ){
    // save ordrer data in db
       donationData.transactionId = result?.paymentIntent?.id
    // console.log( orderData.transactionId)
      try{
               
          const {data} = await axiosInstance.post("/save-pament-data" ,donationData )
          if(data){
            toast.success("Donation successfully!")
          }
          console.log(data)
         }
         
         catch(err){
             setCardError(err?.message)
         }
         finally{
             setCardError(null)
             setCardProssesing(false)
             closeModal()
         }
        
        //update product quantity in db from plant collection

    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <p className='text-white pb-3' >{cardError}</p>
      <div className='flex justify-between  '>
            <button type="submit" className=' px-8 py-2 rounded bg-black/20 cursor-pointer shadow-lg md:py-3 ' disabled={!stripe || cardProssesing}>
            { cardProssesing?<BarLoader />:`Pay ${donnetAmmount}$`}
           </button>

            <button type="button" onClick={closeModal} className=' px-8 py-2 rounded bg-black/50 cursor-pointer shadow-lg md:py-3 ' >
              Cancle
         </button>
      </div>
    </form>
  );
};

export default PaymentForm;