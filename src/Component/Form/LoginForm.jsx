import React from 'react';
import { Link } from 'react-router';

const LoginForm = ({handleSubmit}) => {
    return (
         <div className='md:py-10  color-theme'>
          <div className="w-full max-w-lg  p-4 rounded shadow sm:p-8 bg-gray-50 mx-auto text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Sign your account</h2>
                <p className="text-sm text-center font-medium text-gray-600">Don't have account?
                   <Link to={"/register"} className='text-blue-500 hover:underline'>SignUp</Link>
                </p>
             
                <div className="flex items-center w-full my-4">
                    <hr  className="w-full text-gray-600" />
                  
                    <hr  className="w-full text-gray-600" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        
                         <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm text-gray-500">Email address</label>
                            <input type="email" name="email"  placeholder="your@gmail.com" className="w-full px-3 py-2 border-b-2  border-gray-300 outline-none bg-white text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm text-gray-500">Password</label>
                            </div>
                            <input type="password" name="password"  placeholder="*****" className="w-full px-3 py-2 border-b-2 border-gray-300 outline-none bg-white text-gray-800 focus:border-violet-600" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded bg-[#03464D] cursor-pointer text-gray-100">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;