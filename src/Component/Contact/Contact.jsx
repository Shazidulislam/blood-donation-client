import React from 'react';

const Contact = () => {
    return (
        <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 py-20' >
            {/* form */}
            <div>
                <p className='font-semibold text-[#D25D5D]' >Contact Us</p>
                <form action="" className='space-y-3' >
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                       <fieldset className="fieldset pr-2 pt-2   font-medium">
                            <input type="text" name="requester_name"  placeholder="User frist Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                       </fieldset>
                       <fieldset className="fieldset pr-2 pt-2  font-medium">
                            <input type="text" name="requester_name"  placeholder="User Last Name" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                       </fieldset>
                    </div>
                    <fieldset className="fieldset pr-2 pt-2  font-medium">
                       <input type="text" name="requester_name"  placeholder="Your Email" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                   </fieldset>
                    <fieldset className="fieldset pr-2 pt-2  font-medium">
                       <input type="text" name="requester_name"  placeholder="Phone Number" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                   </fieldset>
                    <fieldset className="fieldset pr-2 pt-2  font-medium">
                       <input type="text" name="requester_name"  placeholder="Donation Type" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" />
                   </fieldset>
                    <fieldset className="fieldset pr-2 pt-2  font-medium">
                       <textarea type="text" rows={5} name="requester_name"  placeholder="Donation Type" required className="w-full p-3 border-b-2 border-gray-500 hover:border-[#D25D5D] outline-none bg-white text-gray-800" ></textarea>
                   </fieldset>
                   <button className='px-12 py-4 bg-[#D25D5D] text-white rounded transition-colors transform duration-200 hover:bg-[#B9375D] cursor-pointer' >Continue</button>
                </form>
            </div>
            {/* information */}
            <div>
               <h2 className='text-2xl md:text-4xl ' >Your Donation Can Make Someone’s Life Better</h2>
            </div>
        </div>
    );
};

export default Contact;