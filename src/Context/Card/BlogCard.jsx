import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import useAxiousSecure from '../../hook/useAxiosSecure';
import toast from 'react-hot-toast';
import LoadingSpner from '../../Component/LoadingSpner';

const BlogCard = ({blog}) => {
    const  axiosInstance = useAxiousSecure()
    const queryClient = useQueryClient()


    const {mutate , isLoading} = useMutation({
        mutationFn:async({id , status})=>{
            const {data} = await axiosInstance.patch(`/blog-status-update/${id}` , {status})
            return data
        },
        onSuccess:(data)=>{
            console.log(data)
             if(data?.modifiedCount){
                toast.success("Status update Successfully!")
             }
             else if(data?.deletedCount){
                toast.success("Blog delete  Successfully!")
             }
             queryClient.invalidateQueries({ queryKey: ['blogCard'] })

        },
        onError:(err)=>{
            toast.error(err.message)
            console.log(err)
        }
    })

   if(isLoading) return <LoadingSpner/>

    console.log(blog)
    const {blog_image ,title,blog_content , blog_status , _id } = blog ||{}
    return (
        <div className='flex flex-col'>
            <figure>
                <img src={blog_image} className='rounded-t-2xl  w-full h-[250px]' alt="" />
            </figure>
           <div className=' shadow flex-1 bg-gray-50 rounded px-2 py-3'>
             <div className='flex gap-2 justify-between'>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <div>
                    <p className='px-4 py-1 text-lime-600 bg-lime-100 rounded-full'>{blog_status}</p>
                </div>
             </div>
             <p className='text-sm text-gray-600'>{blog_content}</p>
             <div className='flex justify-end gap-2 pt-4'>
                {
                    blog_status === "draft" && <button onClick={()=>mutate({
                        id:_id,
                        status:"published"
                    })} className='px-4 py-2 bg-amber-500 rounded text-white cursor-pointer'>Publish</button>
                }
                {
                    blog_status === "published" && <button onClick={()=>mutate({
                        id:_id,
                        status:"draft"
                    })} className='px-4 py-2 bg-lime-500 rounded text-white cursor-pointer'>UnPublish</button>
                }
                 
                 <button  className='px-4 py-2 bg-lime-500 rounded text-white cursor-pointer'>Edit</button>
                 <button onClick={()=>mutate({
                        id:_id,
                        status:"delete"
                    })}
                  className="px-4 py-2 bg-red-500 rounded text-white cursor-pointer" >Delete</button>
             </div>
           </div>
        </div>
    );
};

export default BlogCard;

// {
//     "_id": "68866f5f34d7a4a8aae41c79",
//     "title": "Id consequat Est d",
//     "blog_image": "https://i.ibb.co/CKt009rw/images.jpg",
//     "blog_content": "<p>Cum sunt qui omnis i.</p>",
//     "blog_status": "draft",
//     "create_at": "2025-07-27T18:26:39.495Z",
//     "create_by": "shazidulislam910@gmail.com"
// }