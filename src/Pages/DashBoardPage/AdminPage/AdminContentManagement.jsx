import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import BlogCard from '../../../Context/Card/BlogCard';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../../hook/useAxiosSecure';
import LoadingSpner from '../../../Component/LoadingSpner';

const AdminContentManagement = () => {
    const {count} = useLoaderData()
    console.log(count)
    const axiosInstance = useAxiousSecure()
    //size
    const [itemsPerPage , setItemsPerPage] = useState(2)
    // page
    const [currentPage , setCurrentPage] = useState(0)
     const numberofPage = Math.ceil(count/itemsPerPage)
     const [searchText, setSearchText] = useState('');
    const pages = [...Array(numberofPage).keys()]
    console.log("numberof page",numberofPage ,"page", pages , )


    const {data ,isLoading } = useQuery({
        queryKey:["blogCard" ,currentPage, itemsPerPage ],
        queryFn:async()=>{
            const {data} = await axiosInstance("/all-blog-data-find" , {
                params: {
                page: currentPage,
                size: itemsPerPage,
                },
            })
            return data
        }
    })
     console.log(data)

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

    if(isLoading) return <LoadingSpner/>
      const filterBlog = data?.filter(blog =>
    blog?.blog_status?.toLowerCase().includes(searchText)
  );
    return (
        <div className='px-4 py-6 bg-gray-50'>
             <div className='bg-white px-4 py-10 rounded-lg shadow-lg'>
                 <div>
                    <div className='flex justify-between items-start'>
                         <h2 className='text-[#D25D5D] text-2xl md:text-4xl lg:text-5xl font-bold'>Publish Powerhouse</ h2>
                         <Link to="/dashboard/content-management/add-blog" className='text-sm font-medium px-6 py-2 cursor-pointer border-2 border-[#D25D5D] text-[#D25D5D] transition-all transform duration-300 hover:scale-105'>Add Blog</Link>
                    </div>
                     <p className='text-lg font-medium text-gray-400 pt-3'>Organize and control your digital storytelling</p>
                     <div className='divider'></div>
                    <div>
                    </div>  
                         <div className="flex justify-end mb-4">
                                <select
                                className="px-6 py-3 bg-gray-50 border border-gray-300 rounded"
                                value={searchText}
                                onChange={e => setSearchText(e.target?.value?.toLowerCase())}
                                >
                                <option value="">All Blog</option>
                                <option value="draft">Draft</option>
                                <option value="published">Publish</option>
                                </select>
                            </div>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        {
                            filterBlog?.map((blog)=> <BlogCard key={blog?._id} blog={blog} ></BlogCard>)
                        }
                     </div>

                     {/* pagination */}

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
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                    
                </div>
                 </div>
             </div>
        </div>
    );
};

export default AdminContentManagement;