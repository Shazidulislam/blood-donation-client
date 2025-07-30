import React, {  useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { imageUpload } from '../../../api/utils';
import useAuth from '../../../hook/useAuth';
import LoadingSpner from '../../../Component/LoadingSpner';
import { useMutation } from '@tanstack/react-query';
import useAxiousSecure from '../../../hook/useAxiosSecure';
import toast from 'react-hot-toast';
const AddBlog = () => {
    const {user , loading} = useAuth()
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const axiosInstance = useAxiousSecure()

    const {mutate } = useMutation({
        mutationFn:async({submisionData})=>{
           const {data} = await axiosInstance.post("/admin-content-management/add-blog" ,{submisionData} ) 
           return data
        }, 
        onSuccess:(data)=>{
            if(data){
                  toast.success("Blog Create Successfully!")  
            }
        },
        onError:(err)=>{
            toast.error(err.message)  
        }
    })
   const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}; 

const clenText = stripHtml(content)
//console.log(clenText)
 const handleSubmit = async(e) => {
    e.preventDefault();
     const form = e.target;
     const title = form.blog_title.value;
     const image = form?.image?.files[0];
     try{
        const imageURL = await imageUpload(image);
        const submisionData= {title , 
            blog_image:imageURL,
            blog_content:clenText,
            blog_status:"draft",
            create_at:new Date().toISOString() ,
            create_by:user?.email,
            created_name:user?.displayName,
        }
        mutate({submisionData,})
      //  //console.log(submisionData)  
       form.reset()
     }
     catch(err){
         console.log(err)
     }
  };
    if(loading)return <LoadingSpner/>
    return (
        <div className='px-4 py-6 bg-gray-50'>
            <div className='bg-white px-4 py-10 rounded-lg shadow-lg min-h-screen'>
                <h2 className='text_primary text-2xl md:text-3xl lg:text-4xl  font-bold'> Share Your Thoughts With the World</h2>
                <h2 className='text-gray-500 text-xs pt-3 font-medium  w-full md:w-5/12'>Add a new blog to share updates, stories, or announcements with the community using a title, image, and content editor.</h2>
                {/* from */}
                <div className='pt-10'>
                      
                      <div>
                        {/* blog form */}
                        <h3 className='text-xl'>Create A  New Blog</h3>
                        <form data-aos="fade-up-right" onSubmit={handleSubmit}>
                          <fieldset className="fieldset pt-5 w-xs pr-2  lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Blog Title</label>
                            <input type="text"  name="blog_title"  placeholder="Blog Title" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800" />
                         </fieldset> 
                          <fieldset className="fieldset w-xs pr-2 pt-2 lg:w-lg  font-medium">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Blog Image</label>
                            <input type='file'
                             id='image'
                             name='blog_image'
                             accept='image/*'
                            className="w-full p-3 border-b-2 border-gray-500 hover:border-[#045760] outline-none bg-white text-gray-800" />
                         </fieldset> 
                          <label htmlFor="name" className="block text-gray-400 my-4 text-sm">Blog Content</label>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    tabIndex={1}
                                    onBlur={(newContent) => setContent(newContent)}
                                    onChange={() => {}}
                                />
                           <div className='flex justify-end'>
                             <button type="submit" className="cursor-pointer text-white  bg_primary px-4 mt-5 py-2 rounded">
                                Submit Blog
                          </button>
                          </div>      
                        </form>
                      </div>
                </div>
            </div>

        </div>
    );
};

export default AddBlog;