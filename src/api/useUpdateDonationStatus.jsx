import {  useMutation, useQueryClient,  } from '@tanstack/react-query';
import useAxiousSecure from '../hook/useAxiosSecure';
import toast from 'react-hot-toast';

const useUpdateDonationStatus = () => {
  const axiosInstance = useAxiousSecure();
  const QueryClient = useQueryClient()

  const { mutate, isLoading, isError, data, error } = useMutation({

    mutationFn: async ({id , status}) => {
      const { data } = await axiosInstance.patch(`/donation-status/update/${id}` , {status});
      console.log(data)
      return data;
    },
    onSuccess:()=>{
         toast.success(`Donation status update`)
         QueryClient.invalidateQueries({ queryKey: ['recentDonation' ] })
         QueryClient.invalidateQueries({ queryKey: ['allDonation' ] })
    },
    onError:(error)=>{
      console.log(error.message)
    }
  });

  return { mutate, isLoading, isError, data, error };
};

export default useUpdateDonationStatus;
