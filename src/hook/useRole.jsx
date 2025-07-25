import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiousSecure from "./useAxiosSecure"
import LoadingSpner from "../Component/LoadingSpner"

export const useRole=  ()=>{
       const {user , loading } = useAuth()
        const axiosInstance = useAxiousSecure()  
       
      
       const {data , isLoading:roleLoading} = useQuery({
        queryKey:["role", user?.email ],
        enabled:!loading && !!user?.email,
        queryFn:async()=>{
            const {data} = await axiosInstance(`/user-role/${user?.email}`)
            return data
        }
       })
        // if(loading) return <LoadingSpner/>
    //    problem
    //    console.log(data ,roleLoading  )
       return [data?.role , data?.status, roleLoading ]

 
}