import { Link, NavLink, useNavigate } from 'react-router';
import Button from './Button/Button';
import ProFirstButton from './Button/ProFirstButton';
import useAuth from '../hook/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate()
    const {user , logOut} = useAuth()
    const handleLogout=()=>{
        logOut()
        toast.success("User log out!")
        navigate("/login")
    }
    console.log(user)
    const link = 
    <>
    <li><NavLink to={"/"} >Home</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
    return (
                <div className="navbar bg-base-100 shadow-sm rounded">
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
                             </li>
                        </ul>
                        </div>
                         <div className='hidden md:flex'>
                            <ProFirstButton ></ProFirstButton>
                        </div>
                       
                    </div>
                    {/* large divice navbar */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal font-medium px-1">
                         {link}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-3 ">
                         <div className='md:hidden'>
                            <ProFirstButton></ProFirstButton>
                        </div>
                         <div className=' hidden md:flex gap-2'>
                            {
                                user ? <Button onClick={handleLogout} label={"Log Out"}></Button> : <>
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