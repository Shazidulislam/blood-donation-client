import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FaRegEdit } from 'react-icons/fa';
import coverPhoto from '../../../../assets/banner/cover.jpg';
import useAxiousSecure from '../../../../hook/useAxiosSecure';
import useAuth from '../../../../hook/useAuth';
import LoadingSpner from '../../../../Component/LoadingSpner';
import toast from 'react-hot-toast';

const getUserProfile = () => {
  const axiosInstance = useAxiousSecure();
  const queryClient = useQueryClient();
  const { user, loading } = useAuth();
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({});

  const { data: getUser, isLoading } = useQuery({
    queryKey: ['getUserProfile', user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance(`/find-user-info/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });
  //console.log(getUser)
  const { mutate } = useMutation({
    mutationFn: async (submisionData) => {
      const { data } = await axiosInstance.patch(`/update-user-info/${user?.email}`, submisionData);
      return data;
    },
    onSuccess: (data) => {
      if(data){
        toast.success("Your profile update successfully" )
      }
      queryClient.invalidateQueries(['getUserProfile']);
    },
    onError:(err)=>{
        toast.error("Vai tumar data jai na!" , err.message)
        //console.log(err.message)
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setEditable(true);
    setFormData(getUser);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const form = e.target
    const formData = new FormData(form)
    const submisionData = Object.fromEntries(formData.entries())
    //console.log(submisionData)
    mutate(submisionData )
    setEditable(false);
    form.reset()
  };

  if (isLoading || loading) return <LoadingSpner />;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-b-2xl overflow-hidden mt-0">
      {/* Cover Photo */}
      <div
        className="relative h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
        <div className="absolute left-6 bottom-[-48px]">
          <img
            className="w-28 h-28 rounded-full border-4 border-white object-cover"
            src={getUser?.photoURL}
            alt="avatar"
          />
          <p className="text-xs text-gray-600">{getUser?.status}</p>
        </div>
      </div>

      <div className="pt-20 px-6 pb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-[#403f3f]">{getUser?.name}</h2>
            <div>
              <p>Blood: {getUser?.blood_group}</p>
              <p>Location: {getUser?.district_id} , {getUser?.upazila}</p>
            </div>
          </div>

          {!editable && (
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 px-4 py-2 bg-[#D25D5D] text-white rounded hover:bg-[#B9375D]"
            >
              <FaRegEdit /> Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <fieldset className="fieldset font-medium">
            <label className="block text-gray-400 text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={editable ? formData.name : getUser.name}
              onChange={handleChange}
              disabled={!editable}
              placeholder="Your Name"
              className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
            />
          </fieldset>

          <fieldset className="fieldset font-medium">
            <label className="block text-gray-400 text-sm mb-2">Email (read-only)</label>
            <input
              type="email"
              name='email'
              value={getUser.email}
              readOnly
              className="w-full p-3 border-b-2 border-gray-500 bg-gray-100 text-gray-800"
            />
          </fieldset>

          <fieldset className="fieldset font-medium">
            <label className="block text-gray-400 text-sm mb-2">District</label>
            <input
              type="text"
              name="district"
              value={editable ? formData.district : getUser.district}
              onChange={handleChange}
              disabled={!editable}
              placeholder="District"
              className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
            />
          </fieldset>

          <fieldset className="fieldset font-medium">
            <label className="block text-gray-400 text-sm mb-2">Upazila</label>
            <input
              type="text"
              name="upazila"
              value={editable ? formData.upazila : getUser.upazila}
              onChange={handleChange}
              disabled={!editable}
              placeholder="Upazila"
              className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
            />
          </fieldset>

          <fieldset className="fieldset font-medium">
            <label className="block text-gray-400 text-sm mb-2">Blood Group</label>
            <input
              type="text"
              name="blood_group"
              value={editable ? formData.blood_group : getUser.blood_group}
              onChange={handleChange}
              disabled={!editable}
              placeholder="Blood Group"
              className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800"
            />
          </fieldset>

          {editable && (
            <div className="col-span-2">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default getUserProfile;



// // {
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
// }