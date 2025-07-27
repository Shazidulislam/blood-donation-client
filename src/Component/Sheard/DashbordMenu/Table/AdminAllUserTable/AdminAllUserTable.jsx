import { BsThreeDotsVertical } from 'react-icons/bs';
import LoadingSpner from '../../../../LoadingSpner';
import { useState } from 'react';

const AdminAllUserTable = ({data , isLoading}) => {
    
    const [searchText , setSearchText] = useState("")
    
    const filterUser = data?.filter(user=>user.status?.toLowerCase().includes(searchText))
    if(isLoading) return <LoadingSpner/>
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
             <div className='flex justify-end'>
               <select className='px-6 py-3 bg-gray-50'
                value={searchText} 
                onChange={e=>setSearchText(e.target?.value?.toLowerCase())} >
                    <option  value="">All User</option>
                  <option value="active">Active</option>
                  <option value="blocked">Blocked</option>
               </select>
            </div>
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
                    filterUser?.map((user)=> <tbody key={user?._id} className="border-b border-b-gray-400 dark:bg-gray-50 dark:border-gray-300">
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
                           
                            <td className="px-3 py-2 space-x-3">
                                {
                                    user?.status === "active" &&( <button className='px-3 py-1 bg-lime-100 rounded-full text-gray-500'>Block</button>)
                                }
                                {
                                    user?.status === "blocked" &&( <button className='px-3 py-1 bg-lime-100 rounded-full text-gray-500'>Unblock</button>)
                                }
                                {
                                    user.role === "donner" && (<button className='px-3 py-1 bg-lime-100 rounded-full text-gray-500' >Volunteer</button>)
                                }
                                {
                                    user.role === "donner"|| user.role === "volunteer" ? (<button className='px-3 py-1 bg-lime-100 rounded-full text-gray-500' >Admin</button>) :""
                                }
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


