import axios from 'axios';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';
import toast from 'react-hot-toast';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_KEY
})

const useAxiousSecure = () => {
    const {user , logOut} = useAuth()
    const  navigate = useNavigate()

   axiosInstance?.interceptors?.request?.use(config=>{
    if(user?.accessToken){
         config.headers.Authorization = `Bearer ${user?.accessToken}`
    }
    return config
   })

    //response
    axiosInstance?.interceptors?.response?.use(response=>{
        return response
    } , error=>{
        if(error.status === 401 || error.status === 403){
              logOut()
              .then(()=>{
              toast.error("Sign Out User for 401 Status Code!")
               navigate("/login")

          })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiousSecure;