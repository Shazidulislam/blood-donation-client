import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiousSecure from "./useAxiosSecure"

export const useRole=  ()=>{

       const {user , loading} = useAuth()
       const axiosInstance = useAxiousSecure()  
       const {data:role , isLoading:roleLoading} = useQuery({
        queryKey:["role", user?.email ],
        enabled:!loading && !!user?.email,
        queryFn:async()=>{
            const {data} = await axiosInstance(`/user-role/${user?.email}`)
            return data
        }
       })


       console.log(role ,roleLoading )
       return [role?.role , roleLoading]
}