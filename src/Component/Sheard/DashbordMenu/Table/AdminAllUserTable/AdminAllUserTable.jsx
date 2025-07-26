import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../../../../hook/useAxiosSecure';
import LoadingSpner from '../../../../LoadingSpner';

const AdminAllUserTable = () => {
    const axiosInstance = useAxiousSecure()
    const {data , isLoading}=useQuery({
        queryKey:["allUser" ],
        queryFn:async()=>{
            const {data} = await axiosInstance("/all-user-info")
            return data
        }
    })
    console.log(data)
    if(isLoading) return <LoadingSpner/>
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                    <colgroup>
                        <col className="w-5" />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-5" />
                    </colgroup>
                    <thead>
                        <tr className="dark:bg-gray-300 border-b-2 border-gray-400 text-sm ">
                            <th className="p-3">Avatar</th>
                            <th className="p-3">User Info</th>
                            <th className="p-3"> Address</th>
                            <th className="p-3"> Blood Group</th>
                            <th className="p-3">User Role</th>
                            <th className="p-3">
                               Actions
                            </th>
                        </tr>
                         
                    </thead>

                    
                   {
                    data?.map((user)=> <tbody key={user?._id} className="border-b border-b-gray-400 dark:bg-gray-50 dark:border-gray-300">
                        <tr>
                            <td className="px-3 py-2">
                                <figure>
                                    <img src={user?.photoURL} className='w-20 rounded-full' alt="" />
                                </figure>
                            </td>

                            <td className="px-3 py-2 text-xs">
                                <p className='text-gray-600'>{user?.name}</p>
                                <p className='text-gray-600'>{user?.email}</p>
                            </td>

                            <td className="px-3 py-2">
                               <p className='text-gray-600'>{user?.district_id}</p>
                                <p className='text-gray-600'>{user?.upazila}</p>
                            </td>

                            <td className="px-3 py-2">
                                <p className="dark:text-gray-600">{user?.status}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p className="dark:text-gray-600">{user?.role}</p>
                            </td>
                           
                            <td className="px-3 py-2">
                                <p>take action after</p>
                            </td>
                        </tr>
                    </tbody>)
                   }
                   
                </table>
            </div>
        </div>
    );
};

export default AdminAllUserTable;


// /**
//  * 
//  * {
//     "_id": "688125ba1008253b317742be",
//     "name": "Shazidul Islam",
//     "email": "shazidulislam910@gmail.com",
//     "photoURL": "https://i.ibb.co/dwBYw58R/images-2.jpg",
//     "blood_group": "A+",
//     "district_id": "1",
//     "upazila": "Debidwar",
//     "role": "admin",
//     "status": "active",
//     "create_at": "2025-07-23T18:11:04.526Z",
//     "last_login": "2025-07-23T18:11:04.548Z"
// }/ 