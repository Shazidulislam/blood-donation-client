import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import LoadingSpner from "../LoadingSpner";
import donner1 from "../../assets/bg/blood-1.jpg";
import donner2 from "../../assets/bg/blood-2.jpg";
import donner3 from "../../assets/bg/blood-3.jpg";
import donner4 from "../../assets/bg/blood-4.jpg";
import donner5 from "../../assets/bg/blood-5.jpeg";
import donner6 from "../../assets/bg/blood-6.jpg";
import donner7 from "../../assets/bg/blood-10.jpg";
import donner8 from "../../assets/bg/blood-8.jpg";
import { Link } from "react-router";

const BestDonner = () => {
  const [loading, setLoading] = useState(true);
  const [donnerData, setDonnerData] = useState([]);
  useEffect(() => {
    const bestDonnerData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_KEY}/all-best-donner`
        );
        console.log(data);
        if (data) {
          setLoading(false);
          setDonnerData(data);
        }
        return data;
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    bestDonnerData();
  }, []);

  const allImg = {
    1: donner1,
    2: donner2,
    3: donner3,
    4: donner4,
    5: donner5,
    6: donner6,
    7: donner7,
    8: donner8,
  };

  if (loading) return <LoadingSpner></LoadingSpner>;

  return (
    <div className="py-2">
      <h2 className=" text-3xl lg:text-5xl text-[#D25D5D] font-semibold text-center heading py-6">
        Our Best Donors
      </h2>
      <Marquee pauseOnHover={true}>
        <div className=" space-x-6 pl-6 mb-3 flex  justify-center">
          {donnerData?.map((donner) => {
            return (
              <div key={donner?._id}>
                <figure>
                  <img
                    src={allImg[donner?.id]}
                    className="rounded-t-lg h-52"
                    alt=""
                  />
                </figure>
                <div className="p-3 shadow-lg shadow-[#D25D5D90] rounded-b-sm h-42 ">
                  <p>
                    <span className="font-semibold">Name : </span>
                    <span className="text-sm">{donner?.name}</span>
                  </p>
                  <p>
                    <span className="font-semibold">TotalDonation : </span>
                    <span className="text-sm">
                      {donner?.totalDonation} times
                    </span>
                  </p>
                   <p>
                    <span  className="font-semibold">Blood Group : </span>
                    <span className="text-sm">{donner?.bloodGroup}</span>
                  </p>
                  
                  <p className="w-64">
                    <span className="text-sm pb-6">{donner?.details}</span>
                  </p>
                   
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default BestDonner;
