import { BsThreeDotsVertical } from 'react-icons/bs';
import LoadingSpner from '../../../../LoadingSpner';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiousSecure from '../../../../../hook/useAxiosSecure';
import toast from 'react-hot-toast';

const AdminAllUserTable = ({ data, isLoading }) => {
  const [searchText, setSearchText] = useState('');
  const [openActionId, setOpenActionId] = useState(null);
  const axiosInstance = useAxiousSecure()
  const  queryClient = useQueryClient()


//change status
const { mutate  } = useMutation({
  mutationFn: async({ id, status })=>{
    const { data } = await axiosInstance.patch(`/user-status/update/${id}`, { status });
    console.log(data)
    return data;
  },
  onSuccess: () => {
    toast.success("Status updated successfully.");
    queryClient.invalidateQueries({ queryKey: ['allUsers'] });
  },
  onError: (err) => {
    console.error(err.message);
    toast.error(err.message);
  }
});

//change user role
const {mutate:updateRole} = useMutation({
  mutationFn:async({id , role}) =>{
    const {data} = await axiosInstance.patch(`/user-role-update/${id}` , {role})
    return data
  },
  onSuccess:()=>{
    toast.success("User role update successfully")
     queryClient.invalidateQueries({ queryKey: ['allUsers'] });
  },
  onError:(err)=>{
    toast.error(err.message)
  }
})

  const filterUser = data?.filter(user =>
    user.status?.toLowerCase().includes(searchText)
  );

  if (isLoading) return <LoadingSpner />;

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      {/* Filter Dropdown */}
      <div className="flex justify-end mb-4">
        <select
          className="px-6 py-3 bg-gray-50 border border-gray-300 rounded"
          value={searchText}
          onChange={e => setSearchText(e.target?.value?.toLowerCase())}
        >
          <option value="">All Users</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            <col className="w-5" />
          </colgroup>
          <thead>
            <tr className="dark:bg-gray-300 border-b-2 border-gray-400 text-sm">
              <th className="p-3">Avatar</th>
              <th className="p-3">User Info</th>
              <th className="p-3">Address</th>
              <th className="p-3">Blood Group</th>
              <th className="p-3">Status</th>
              <th className="p-3">User Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          {filterUser?.map(user => (
            <tbody
              key={user?._id}
              className="border-b border-b-gray-400 dark:bg-gray-50 dark:border-gray-300"
            >
              <tr>
                <td className="px-3 py-2">
                  <figure>
                    <img
                      src={user?.photoURL}
                      className="w-20 rounded-full"
                      alt=""
                    />
                  </figure>
                </td>

                <td className="px-3 py-2 text-xs">
                  <p className="text-gray-600">{user?.name}</p>
                  <p className="text-gray-600">{user?.email}</p>
                </td>

                <td className="px-3 py-2">
                  <p className="text-gray-600">{user?.district_id}</p>
                  <p className="text-gray-600">{user?.upazila}</p>
                </td>
                 
                <td className="px-3 py-2">
                  <p className="dark:text-gray-600">{user?.blood_group}</p>
                </td>
                 {/* status */}
                <td className="px-3 py-2">
                  <p className="dark:text-gray-600">{user?.status}</p>
                </td>
                 {/* role =  */}
                <td className="px-3 py-2">
                  <p className="dark:text-gray-600">{user?.role}</p>
                </td>

                {/* Actions Dropdown */}
                <td className="relative px-3 py-2">
                    {/* three dot  */}
                  <button
                    onClick={() =>
                      setOpenActionId(openActionId === user._id ? null : user._id)
                    }
                    className="p-2 hover:bg-gray-200 rounded-full"
                  >
                    <BsThreeDotsVertical />
                  </button>

                  {openActionId === user._id && (
                    <div className="absolute z-10 flex flex-col gap-2 bg-white border shadow-md p-3 rounded-md top-10 right-0 text-sm">
                      {user?.status === 'active' && (
                        <button onClick={()=>mutate({
                            id:user?._id,
                            status:"blocked"
                        })} className="px-3 py-1 cursor-pointer bg-red-100 rounded text-red-600">
                          Block
                        </button>
                      )}
                      {user?.status === 'blocked' && (
                        <button onClick={()=>mutate({
                            id:user?._id,
                            status:"active"
                        })} className="px-3 cursor-pointer py-1 bg-green-100 rounded text-green-600">
                          Unblock
                        </button>
                      )}
                      {user?.role === 'donner'|| user?.role === 'admin' ? (
                        <button onClick={()=>updateRole({
                          id:user?._id,
                          role:"volunteer"
                        })} className="px-3 py-1 cursor-pointer bg-blue-100 rounded text-blue-600">
                          Make Volunteer
                        </button>
                      ) :""}

                      {(user?.role === 'donner' ||
                        user?.role === 'volunteer') ? (
                        <button onClick={()=>updateRole({
                          id:user?._id,
                          role:"admin"
                        })} className="px-3 py-1 cursor-pointer bg-purple-100 rounded text-purple-600">
                          Make Admin
                        </button>
                      ):""}
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminAllUserTable;
