import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useAxiousSecure from '../../hook/useAxiosSecure';
import LoadingSpner from '../../Component/LoadingSpner';
import BlogCard from '../../Context/Card/BlogCard';

const Blog = () => {
    const [searchText, setSearchText] = useState('');
    const axiosInstance = useAxiousSecure()
    const {data ,isLoading } = useQuery({
            queryKey:["PublishedblogCard" ],
            queryFn:async()=>{
                const {data} = await axiosInstance("/all-blog-data-find")
                return data
            }
        })
    if(isLoading) return <LoadingSpner/>  
      const filterBlog = data?.filter(blog =>
    blog?.blog_status?.toLowerCase().includes("published"))
    console.log(filterBlog)
    return (
        <div className='py-1'>
            <div className='px-2 md:px-10  py-10 bg-[#D25D5D] text-white my-1 rounded'>
                <h2 className='text-3xl md:text-4xl font-semibold'>Blood Donation Community Blogs</h2>
                <p>Stay informed with our latest articles and stories</p>
            </div>
            <div className='flex justify-center items-center py-10'>
                  <fieldset className="fieldset relative w-xs md:w-lg  font-medium">
                            <input type="text"  
                              value={searchText}
                             onChange={e => setSearchText(e.target?.value?.toLowerCase())}
                             placeholder="Search by title" 
                             className="w-full p-3  border-b-2 border-[#D25D5D] outline-none bg-white shadow text-gray-800 rounded" />
                            <span className='absolute right-3 top-4 text-gray-500'><FaSearch  size={20}/> </span>
                </fieldset>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                 {
                   filterBlog?.map((blog)=> <BlogCard key={blog?._id} blog={blog} ></BlogCard>)
                }  
            </div>
        </div>
    );
};

export default Blog;