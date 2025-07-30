import React from 'react';

const FunDingTable = ({data}) => {
    return (
 <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
              <> <div className="overflow-x-auto">
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
                        <tr className="dark:bg-gray-300 border-b-2 border-gray-400">
                            <th className='p-3' >Avatar</th>
                            <th className="p-3 pl-20">Donner Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Donation</th>
                            <th className="p-3">Date</th>
                        </tr>
                         
                    </thead>

                    
                   {
                    data?.map((donation)=> <tbody key={donation?._id} className="border-b border-b-gray-400 dark:bg-gray-50 dark:border-gray-300">
                        <tr>
                            <td className='p-3' >
                               <figure>
                                 <img src={donation?.image} className='rounded-full w-12 h-12' alt="" />
                               </figure>
                            </td>
                            <td className="px-3 py-2 pl-20">{donation?.donner}</td>
                            <td className="px-3 py-2">{donation?.email}</td>
                            <td className="px-3 py-2">${donation?.donation}</td>
                            <td className="px-3 py-2">{new Date(donation?.create_at).toLocaleDateString("en-CA")}</td>
                        </tr>
                    </tbody>)
                   }
                   
                </table>
            </div></>
        </div>
    );
};

export default FunDingTable;

// {
//     "_id": "6889e1c512c0baab2bc07796",
//     "donner": "Shazidul Islam",
//     "email": "shazidulislam910@gmail.com",
//     "image": "https://i.ibb.co/dwBYw58R/images-2.jpg",
//     "donation": 490,
//     "transactionId": "pi_3RqgFvIJV0XTBdMJ04hF0h9B"
// }