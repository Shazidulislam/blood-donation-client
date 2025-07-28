import React from 'react';

const SearchCard = ({user}) => {
    const {name ,email , district_id , upazila , blood_group ,  } = user || {}
    return (
        <div className='px-10 py-6 bg-white border-t-4  border-red-500 rounded-xl'>
            <h2 className='text-3xl font-bold text-[#403f3f]' >{name}</h2>
            <p className='text-2xl py-2 font-semibold text-red-500'>Blood Group {blood_group}</p>
            <div className='space-y-3'>
                <p className='text-gray-600 '>Location : {upazila} , {district_id}</p>
                <p className='text-gray-600 '>Contact : {email}</p>
            </div>
        </div>
    );
};

export default SearchCard;


// {
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