import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiousSecure from "../../hook/useAxiosSecure";
import LoadingSpner from "../../Component/LoadingSpner";
import DonationCard from "../../Context/Card/DonationCard";
import Sidespace from "../../Component/Sidespace/Sidespace";
import { FaSearch } from "react-icons/fa";

const BloodDonationRequest = () => {
  const [searchText, setSearchText] = useState("");

  const axiosInstance = useAxiousSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["publicDonation"],
    queryFn: async () => {
      const { data } = await axiosInstance(`/admin-all-donation`, {});
      return data;
    },
  });

const filterDonation = data?.filter(
  (donation) =>
    donation?.donation_status === "pending" &&
    donation?.district?.toLowerCase().includes(searchText?.toLowerCase())
);
  //  //console.log(data)

  if (isLoading) return <LoadingSpner />;

  
  console.log(filterDonation);

  return (
    <Sidespace>
      <div className="pb-10">
        <h2 className="text-2xl md:text-4xl font-semibold py-10 text-center text-[#D25D5D]">
          Active Blood Donation Requests
        </h2>
        <div className="flex justify-center items-center py-10">
          <fieldset className="fieldset relative w-xs md:w-lg  font-medium">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target?.value?.toLowerCase())}
              placeholder="Search by district"
              className="w-full p-3  border-b-2 border-[#D25D5D] outline-none bg-white shadow text-gray-800 rounded"
            />
            <span className="absolute right-3 top-4 text-gray-500">
              <FaSearch size={20} />{" "}
            </span>
          </fieldset>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 py-2">
          {filterDonation?.map((donation) => (
            <DonationCard
              key={donation?._id}
              donation={donation}
            ></DonationCard>
          ))}
        </div>
      </div>
    </Sidespace>
  );
};

export default BloodDonationRequest;
