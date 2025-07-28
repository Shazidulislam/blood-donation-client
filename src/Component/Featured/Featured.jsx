import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import highangleimg from '../../assets/banner/donateBlood.jpg'
import { MdOutlineCheck } from 'react-icons/md';

const Featured = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 py-2'>
            {/* frist */}
            <div className=''>
                <p className='text-[#D25D5D] font-semibold'>About Us</p>
                <h2 className=' text-2xl md:text-4xl font-bold'>Together We Can Make World More Health & Better</h2>
                <p className='text-sm text-gray-600 py-2'>Together, we can build a healthier future for all. By donating blood, spreading awareness, and supporting one another, we bring hope and healing to those in need. Every small act counts — let’s unite, take action, and make our world a better and stronger place to live.</p>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <p className='flex justify-start font-medium  text-gray-600 items-center gap-2'> <span className='text-[#D25D5D]'><MdOutlineCheck/></span> <span>Good Service</span> </p>

                    <p className='flex justify-start font-medium  text-gray-600 items-center gap-2' ><span className='text-[#D25D5D]'><MdOutlineCheck/></span> <span>Help People</span> </p>

                    <p className='flex justify-start font-medium  text-gray-600 items-center gap-2'><span className='text-[#D25D5D]'><MdOutlineCheck/></span> <span>Hygine Tools</span> </p>
                    <p className='flex justify-start font-medium  text-gray-600 items-center gap-2'><span className='text-[#D25D5D]'><MdOutlineCheck/></span>  <span>Health Check</span> </p>
                    <p className='flex justify-start font-medium  text-gray-600 items-center gap-2'><span className='text-[#D25D5D]'><MdOutlineCheck/></span> <span>24h Service</span> </p>
                    <p className='flex justify-start font-medium  text-gray-600 items-center gap-2'><span className='text-[#D25D5D]'><MdOutlineCheck/></span>  <span>Health Check</span> </p>
                </div>
                <div className='pt-10'>
                    <button className='px-12 transition-colors cursor-pointer rounded duration-300  py-5 shadow-2xl shadow-[#B9375D50] bg-[#D25D5D] hover:bg-[#B9375D] text-white'>About Us</button>
                </div>
            </div>
            {/* second */}
            <div>
                <figure>
                    <img className='rounded' src={highangleimg} alt="" />
                </figure>
            </div>
            {/* join section */}
            <div className='px-20 py-10 md:flex gap-6 col-span-1 md:col-span-2 bg-[#D25D5D] rounded text-white'>
                <div>
                    <h1 className='text-3xl md:text-4xl font-semibold font-seconbary'>Join To Get Our Newsletter</h1>
                    <p className='text-gray-100'>Join Us & Stay Updated with Life-Saving Blood News!</p>
                </div>
                <div className='md:flex gap-6 md:pl-36'>
                    <fieldset>
                        <input type="text" className='px-3 py-5 w-full text-black outline-none rounded-xs bg-white ' placeholder='Your Email'  />
                    </fieldset>
                    <button className='px-12 py-5 bg-black rounded'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;