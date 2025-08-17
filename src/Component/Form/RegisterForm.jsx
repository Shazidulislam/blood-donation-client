import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../hook/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { LuEyeOff } from "react-icons/lu";
import { FiEye } from "react-icons/fi";


const RegisterForm = ({ handleRegister, error, setSelectDistrict }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const { districtData, upazilas, loading } = useAuth();
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  useEffect(() => {
    if (selectedDistrictId) {
      const filtered = upazilas.filter(
        (upazila) => upazila?.district_id === selectedDistrictId
      );
      setFilteredUpazilas(filtered);
    } else {
      setFilteredUpazilas([]);
    }
  }, [selectedDistrictId, upazilas]);

  return (
    <div>
      <div className="md:py-5  color-theme">
        <div className="w-full  md:w-xl   sm:p-8  mx-auto text-gray-800">
          <form onSubmit={handleRegister} className="space-y-3 text-white">
            <fieldset className="fieldset w-xs md:w-lg  font-medium">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="User Name"
                className="w-full p-3  outline-none font-semibold border-b-2 border-white hover:border-[#D25D5D] "
              />
            </fieldset>
            <fieldset className="fieldset w-xs md:w-lg  font-medium">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="User Name"
                className="w-full p-3  outline-none border-b-2 border-white hover:border-[#D25D5D] "
              />
            </fieldset>
            <fieldset className="fieldset w-xs  md:w-lg  font-medium">
              <label className="block text-sm font-medium">Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full p-3  outline-none border-b-2 border-white hover:border-[#D25D5D] "
              />
            </fieldset>
            <fieldset className="fieldset  w-xs md:w-lg">
              <legend className="">Blood group</legend>
              <select
                name="blood_group"
                defaultValue={"Select A Group"}
                className=" w-full p-3  outline-none border-b-2 border-white hover:border-[#D25D5D] "
              >
                <option className="text-gray-400 text-white" disabled={true}>
                  Select A Group
                </option>
                <option className="text-gray-400" value={"A+"}>
                  A+
                </option>
                <option className="text-gray-400" value={"B+"}>
                  B+
                </option>
                <option className="text-gray-400" value={"AB+"}>
                  AB+
                </option>
                <option className="text-gray-400" value={"O+"}>
                  O+
                </option>
                <option className="text-gray-400" value={"AB-"}>
                  AB-
                </option>
                <option className="text-gray-400" value={"A-"}>
                  A-
                </option>
                <option className="text-gray-400" value={"B-"}>
                  B-
                </option>
                <option className="text-gray-400" value={"O-"}>
                  O-
                </option>
              </select>
            </fieldset>
            {/* selected district start */}
            <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
              <label htmlFor="name" className="block  text-sm">
                Recipient District
              </label>
              <select
                onChange={(e) => {
                  const [name, id] = e.target.value.split("|||");
                  setSelectedDistrictId(id);
                  setSelectDistrict(name);
                }}
                defaultValue="Select Your Current District"
                required
                className="w-full p-3  outline-none border-b-2 border-white hover:border-[#D25D5D] "
              >
                <option disabled={true}>Select Your Current District</option>
                {districtData.map((district) => (
                  <option
                    className="text-gray-400"
                    key={district?.id}
                    value={`${district?.name}|||${district?.id}`}
                  >
                    {district?.name}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* selected upazila start */}
            <fieldset className="fieldset w-xs pr-2   pt-2  lg:w-lg">
              <label htmlFor="name" className="block  text-sm">
                Recipient Upazila
              </label>
              <select
                name="upazila"
                required
                className="w-full p-3  outline-none border-b-2 border-white hover:border-[#D25D5D]"
              >
                <option value="">Select an upazila</option>
                {filteredUpazilas.map((upazila) => (
                  <option
                    className="text-gray-400"
                    key={upazila.id}
                    value={upazila.name}
                  >
                    {upazila.name}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* selected upazila end */}
            {/* password */}
            <fieldset className="fieldset relative w-xs md:w-lg  font-medium">
              <label className="block text-sm">Password</label>
              <input
                type={isOpen?"text":"password"}
                name="password"
                placeholder="***********"
                className="w-full p-3  outline-none border-b-2 border-white hover:border-[#D25D5D]"
              />
              <span className="absolute  right-4 top-10" >
                {
                   isOpen? <span className="" onClick={()=>setIsOpen(false)}> <FiEye size={20}/></span> :<span onClick={()=>setIsOpen(true)}><LuEyeOff size={20}/></span> 
                }
              </span>
            </fieldset>
            {/* Confirm Password */}
            <fieldset className="relative fieldset w-xs md:w-lg  font-medium">
              <label className="block text-sm">Confirm Password</label>
              <input
                type={isOpen1?"text":"password"}
                name="Confirm_Password"
                placeholder="***********"
                className="w-full p-3  outline-none border-b-2 border-white hover:border-[#D25D5D]"
              />
                <span className="absolute  right-4 top-10" >
                {
                   isOpen1? <span className="" onClick={()=>setIsOpen1(false)}> <FiEye size={20}/></span> :<span onClick={()=>setIsOpen1(true)}><LuEyeOff size={20}/></span> 
                }
              </span>
            </fieldset>
            <fieldset className="fieldset w-xs md:w-lg  ">
              <button 
                type="submit"
                className="w-full px-8 py-3 font-semibold  bg-[#D25D5D] cursor-pointer text-gray-100"
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  "Continue"
                )}
              </button>
            </fieldset>
            {error && <p className="text-error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
