import React, { useState } from 'react';
import AdminallDonationTable from '../../../Component/Sheard/DashbordMenu/Table/AdminallDonationTable';
import { useLoaderData } from 'react-router';

const  AllBloodDonationRequest  = () => {
    const {count} = useLoaderData()
    const [itemsPerPage , setItemsPerPage] = useState(10)
    const [currentPage , setCurrentPage] = useState(0)
    const numberofPage = Math.ceil(count/itemsPerPage)
     const pages = [...Array(numberofPage).keys()]
      console.log(numberofPage)

    const handleNextPage =()=>{
        if(currentPage < pages.length-1){
              setCurrentPage(currentPage+1)
        }
    }  

    const handlePrevPage=()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage-1)
        }
    }
    return (
        <div className='px-4 py-6 bg-gray-50 '>
            <div className='bg-white px-4 py-10 rounded-lg shadow-lg'>
                 <h2 className='text-[#D25D5D] text-2xl md:text-4xl lg:text-5xl font-bold' >Manage  Donation</h2>
                 <p className='text-lg font-medium text-gray-400 pt-3'>Comprehensive Blood Request Overview</p>
                 <div className='divider'></div>
                 <div>
                    <AdminallDonationTable  size={itemsPerPage} page={currentPage}></AdminallDonationTable>
                 </div>
                 {/* pagination */}
                 <div className='text-center space-x-2 pt-10'>
                       <button onClick={handlePrevPage} className='btn mr-2'>Prev</button>
                    {
                        pages.map(page=><button onClick={()=>{
                            setCurrentPage(page)
                        }} className={`btn ${currentPage == page ? " bg-amber-500 text-white" : ""}`} key={page}>{page}</button>)
                    }
                    <button onClick={handleNextPage} className='btn mr-2'>Next</button>
                    <select value={itemsPerPage}
                      onChange={e=>{
                        setItemsPerPage(parseInt(e.target.value))
                        setCurrentPage(0)
                      }}
                     >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                 </div>
            </div>
        </div>
    );
};

export default  AllBloodDonationRequest ;