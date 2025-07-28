import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AdminAllUserTable from '../../../Component/Sheard/DashbordMenu/Table/AdminAllUserTable/AdminAllUserTable';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../../hook/useAxiosSecure';

const Alluser = () => {
    const {count} =useLoaderData()
    const axiosInstance = useAxiousSecure()
    //size
    const [itemsPerPage , setItemsPerPage] = useState(10)
    // page
    const [currentPage , setCurrentPage] = useState(0)
     
    const {data , isLoading}=useQuery({
          queryKey: ['allUsers', currentPage, itemsPerPage],
            queryFn: async () => {
            const response = await axiosInstance.get('/all-user-info', {
                params: {
                page: currentPage,
                size: itemsPerPage,
                },
            });
            return response.data;
            }
    })    

    const numberofPage = Math.ceil(count/itemsPerPage)
    const pages = [...Array(numberofPage).keys()]
    console.log(numberofPage , pages)
    const handlePreviosPage =()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNextPage=()=>{
        if(currentPage < pages.length-1){
             setCurrentPage(currentPage+1)
        }
    }
    return (
        <div className='px-4 py-6 bg-gray-50'>
            <div className='bg-white px-4 py-10 rounded-lg shadow-lg'>
               {/* table data */}
                    <div>
                       <h2 className='text-[#D25D5D] text-2xl md:text-4xl lg:text-5xl font-bold'>All Users </ h2>
                        <p className='text-lg font-medium text-gray-400 pt-3'>Easily monitor and manage user roles, access, and activity in one place</p>
                        <div className='divider'></div>
                        <div>
                             <AdminAllUserTable data={data} isLoading={isLoading} />
                        </div>
                    </div>
                    {/* pageination btn */}
                <div className='text-center py-10'>
                    <button onClick={handlePreviosPage} className='btn mr-2'>Prev</button>
                    {
                        pages.map(page=> <button onClick={()=>setCurrentPage(page)}
                         className={`btn mr-2 ${currentPage===page?"bg-amber-500 text-white":""} `} key={page}>{page}</button>)
                    }
                    <button onClick={handleNextPage} className='btn mr-2'>Next</button>
                    
                    <select value={itemsPerPage} 
                    onChange={e=>{
                        const val = parseInt(e.target.value)
                        setItemsPerPage(val)
                        setCurrentPage(0)
                    }}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                    
                </div>
            </div>
        </div>
    );
};

export default Alluser;