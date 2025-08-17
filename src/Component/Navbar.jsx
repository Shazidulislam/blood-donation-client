import { Link, NavLink, useNavigate } from 'react-router';
import Button from './Button/Button';
import ProFirstButton from './Button/ProFirstButton';
import useAuth from '../hook/useAuth';
import toast from 'react-hot-toast';
import { useEffect, useRef, useState } from 'react';
import LoadingSpner from './LoadingSpner';

const Navbar = () => {
    const navigate = useNavigate()
    const {user , loading , logOut} = useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();
    const handleLogout=()=>{
        logOut()
        toast.success("User log out!")
        navigate("/login")
    }


 useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


    const link = 
    <>
    <li><NavLink to={"/"} >Home</NavLink></li>
    <li><NavLink to="/search">Search</NavLink></li>
    <li><NavLink to="/all-blood-donation-request">Donation</NavLink></li>
    <li><NavLink to="/published-blog">Blog</NavLink></li>
    <li><NavLink to="/funding">Funding</NavLink></li>
    </>
    if(loading) return <LoadingSpner/>
    return (
                <div className="navbar bg-[#D25D5D90] px-10 sticky top-0 z-10 mx-auto shadow-sm rounded">
                    {/* small divice */}
                    <div className="navbar-start">
                        
                        <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium">
                             {link}
                             <li>
                                <Link to={"/login"} >Sign In</Link>
                                <Link>Sign Up</Link>
                                <Link to="/dashboard" >Dashbord</Link>
                             </li>
                        </ul>
                        </div>
                         <div className='hidden md:flex'>
                            <Link to={"/"}>
                              <ProFirstButton ></ProFirstButton>
                            </Link>
                        </div>
                       
                    </div>
                    {/* large divice navbar */}
                <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal font-medium px-1">
                         {link}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-3 ">
                         <div className='hidden'>
                             <Link to={"/"}>
                              <ProFirstButton ></ProFirstButton>
                            </Link>
                        </div>
                         <div className=' hidden md:flex gap-2'>
                            {
                                user ? <>
                                     <div className="relative inline-block" ref={dropdownRef}>
                                        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                                            <img
                                            className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-500"
                                            src={user?.photoURL || 'https://i.ibb.co/2d9Hf0S/default-user.png'}
                                            alt="User Avatar"
                                            />
                                        </div> 
                                       {/* drop dwon menu */}
                                        {isOpen && (
                                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                                            <ul className="py-2 text-sm text-gray-700">
                                                <li>
                                                <Link
                                                    to="/dashboard"
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    Dashboard
                                                </Link>
                                                </li>
                                                <li>
                                                <button
                                                    onClick={() => {
                                                    handleLogout();
                                                    setIsOpen(false);
                                                    }}
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                >
                                                    Logout
                                                </button>
                                                </li>
                                            </ul>
                                            </div>
                                        )}
                                      </div>  
                                   </>
                                 : <>
                                    <Link to={"/login"}>
                                        <Button label={"Sign In"} outline={true}></Button>
                                        </Link>
                                        <Link to={"/register"}>
                                        <Button label={"Sign Up"}></Button>
                                    </Link>
                                </>
                                        
                                  
                            }
                             
                        </div>  
                    </div>
                </div>
    );
};

export default Navbar;