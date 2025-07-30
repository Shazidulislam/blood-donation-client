import {  useMutation, useQueryClient,  } from '@tanstack/react-query';
import useAxiousSecure from '../hook/useAxiosSecure';
import toast from 'react-hot-toast';

const useUpdateDonationStatus = () => {
  const axiosInstance = useAxiousSecure();
  const QueryClient = useQueryClient()

  const { mutate, isLoading, isError, data, error } = useMutation({

    mutationFn: async ({id , status}) => {
      const { data } = await axiosInstance.patch(`/donation-status/update/${id}` , {status});
      return data;
    },
    onSuccess:(data)=>{
        if(data?.modifiedCount){
                 toast.success(`Donation status update`)
        }
         else if(data?.deletedCount){
                toast.success("Donatio delete  Successfully!")
        }

        
         QueryClient.invalidateQueries({ queryKey: ['recentDonation' ] })
         QueryClient.invalidateQueries({ queryKey: ['allDonation' ] })
         QueryClient.invalidateQueries({ queryKey: ['adminallDonation' ] })
    },
    onError:()=>{
    }
  });

  return { mutate, isLoading, isError, data, error };
};

export default useUpdateDonationStatus;
