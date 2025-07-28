import React from 'react';
import { Link } from 'react-router';

const DonationCard = ({donation}) => {
    const {recipient_name ,district , _id , address ,upazila ,blood_group ,donation_status  ,donation_date ,donation_time }=donation||{}
    return (
        <div className='px-8 py-6  bg-white rounded transition-all transform duration-300 hover:scale-105'>
            <div className='space-y-3'>
             <p><span className='font-semibold text-gray-600'>Recipient Name :</span><span className='text-gray-400'> {recipient_name}</span></p>
             <p><span  className='font-semibold text-gray-600'>Blood :</span> <span className='text-gray-400' >{blood_group}</span></p>

             <p><span  className='font-semibold text-gray-600' >Address :</span> <span className='text-gray-400'  >{address}</span></p>
             <p><span  className='font-semibold text-gray-600' >Upazila :</span><span className='text-gray-400'  >{upazila} </span></p>
             <p><span  className='font-semibold text-gray-600'>District :</span><span className='text-gray-400'  >{district} </span></p>
             <p><span  className='font-semibold text-gray-600' >Date :</span><span className='text-gray-400'  >{donation_date}</span></p>
             <p><span  className='font-semibold text-gray-600' >Time:</span><span className='text-gray-400'  >{donation_time}</span></p>
            </div>
             <p>{donation_status}</p>
             <div className='flex justify-end '>
                <Link  to={`/dashboard/diatils/${_id}`}><button className='text-white rounded-xs bg-[#D25D5D] cursor-pointer px-6 py-2' >View</button></Link>
             </div>
        </div>
    );
};

export default DonationCard;

// {
//     "_id": "688345d3be970e0a8233c241",
//     // "requester_name": "Shazidul Islam",
//     // "requester_email": "shazidulislam910@gmail.com",
//     // "recipient_name": "Phelan Potts",
//     // "district": "Bhola",
//     // "upazila": "Khetlal",
//     // "hospital_name": "Logan Austin",
//     // "address": "Inventore dolore ali",
//     // "blood_group": "B-",
//     // "donation_date": "07/25/2025",
//     // "donation_time": "2:45 PM",
//     // "requester_message": "Id in iste ad ullam",
//     // "donation_status": "pending",
//     // "create_at": "2025-07-25T08:52:35.243Z",
//     // "create_Donation_time": "02:52 PM"
// }