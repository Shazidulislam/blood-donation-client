import React from 'react';
import LoadingSpner from '../../Component/LoadingSpner';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../../hook/useAxiosSecure';

const BlogDeatils = () => {
    const {id} = useParams()
    //console.log(id)
    const axiosInstance = useAxiousSecure()
    const {data ,isLoading } = useQuery({
        queryKey:["PublishedblogCard"  , id],
        queryFn:async()=>{
            const {data} = await axiosInstance(`/single-blog-data-find/${id}`)
            return data
        }
    })
    //console.log(data)
    const {title ,blog_image ,blog_status ,blog_content , create_at , create_by , created_name  } = data || {}
    const date = new Date(create_at)
    const formatted = date.toLocaleDateString()
    if(isLoading) return <LoadingSpner/>
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-10'>
           <div >
              <div className='flex justify-between'>
                    <h2 className='text-2xl md:text-4xl text-[#D25D5D] font-semibold'>{title}</h2>
                <div className='pt-1'>
                    <p className='px-4 py-1  text-lime-600 bg-lime-100 rounded-full'>{blog_status}</p>
                </div>
              </div>
               <div className='space-y-3'>
                    <p className='text-sm text-gray-600 pt-3'>{blog_content}</p>
                    <p><span className='font-semibold text-gray-600'>Create Date : </span><span className='text-sm' >{formatted}</span></p>
                     <p><span className='font-semibold text-gray-600'>Create Info : </span><span className='text-sm' >{created_name}  </span></p>
                     <p><span className='font-semibold text-gray-600'>Create Info : </span><span className='text-sm' >{create_by}  </span></p>
               </div>
              
           </div>
            <div>
                <figure className='w-full'>
                 <img src={blog_image}  className='w-full rounded-2xl' alt="" />
                </figure>
            </div>
        </div>
    );
};

export default BlogDeatils;

// {
//     "_id": "6886676f5f44c63629b02158",
//     "title": "Why Blood Donation Matters ",
//     "blog_image": "https://i.ibb.co/Dg51K8xN/images-1.jpg",
//     "blog_content": "    \"blog_content\": \"Donating blood is one of the most powerful ways to save lives. Each donation can help up to three people in critical need. Whether it's an accident, surgery, or chronic illness, your blood can make the difference between life and death.\",",
//     "blog_status": "published",
//     "create_at": "2025-07-27T17:52:47.227Z",
//     "create_by": "shazidulislam910@gmail.com"
//     created_name
// }