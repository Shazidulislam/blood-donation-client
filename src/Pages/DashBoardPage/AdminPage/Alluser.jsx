import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AdminAllUserTable from '../../../Component/Sheard/DashbordMenu/Table/AdminAllUserTable/AdminAllUserTable';

const Alluser = () => {
    const {count} =useLoaderData()
    const [itemsPerPage , setItemsPerPage] = useState(10)


    const numberofPage = Math.ceil(count/itemsPerPage)
    const pages = [...Array(numberofPage).keys()]
    console.log(numberofPage , pages)
    return (
        <div className='px-4 py-6 bg-gray-50'>
            <div className='bg-white px-4 py-10 rounded-lg shadow-lg'>
               {/* table data */}
                    <div>
                       <h2 className='text_primary text-2xl md:text-4xl lg:text-5xl font-bold'>All Users </ h2>
                        <p className='text-lg font-medium text-gray-400 pt-3'>Easily monitor and manage user roles, access, and activity in one place</p>
                        <div className='divider'></div>
                        <div>
                             <AdminAllUserTable/>
                        </div>
                    </div>
                    {/* pageination btn */}
                <div className='text-center py-10'>
                    {
                        pages.map(page=> <button className='btn mr-2' key={page}>{page}</button>)
                    }
                    <select value={itemsPerPage} 
                    onChange={e=>{
                        const val = parseInt(e.target.value)
                        setItemsPerPage(val)
                    }}
                    >
                        <option value="5">5</option>
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