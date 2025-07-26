// import { useQuery } from "@tanstack/react-query"
// import useAuth from "./useAuth"
// import useAxiousSecure from "./useAxiosSecure"

// export const useRole=  ()=>{
//        const {user , loading } = useAuth()
//         const axiosInstance = useAxiousSecure()  
       
      
//        const {data , isLoading:roleLoading} = useQuery({
//         queryKey:["role", user?.email ],
//         enabled:!loading && !!user?.email,
//         queryFn:async()=>{
//             const {data} = await axiosInstance(`/user-role/${user?.email}`)
//             return data
//         }
//        })
       
//        return [data?.role , data?.status, roleLoading ]

 
// }

import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

export const useRole = () => {
  const { user, loading } = useAuth()
  const axiosInstance = useAxiosSecure()

  const {
    data,
    isLoading: roleLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email && !loading, // only run query when user is ready
    queryFn: async () => {
      const response = await axiosInstance(`/user-role/${user.email}`)
      return response.data
    },
    staleTime: 1000 * 60 * 5, // optional, cache data for 5 min
  })

  return [data?.role, data?.status, roleLoading]
}
