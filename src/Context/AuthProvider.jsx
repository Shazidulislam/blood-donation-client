import {  useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase'
import AuthContext from './AuthContext'
import axios from 'axios'
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [ districtData,setDistrictData] = useState([])
  const [upazilas , setUpazilas] = useState([])
  const [donation , setDonation] = useState(null)
 console.log(user)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  // onAuthStateChange save user
  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth,  currentUser => {
      console.log('email from authprovider', currentUser?.email)
      console.log('user from authprovider', currentUser)
        setUser(currentUser)
        if(currentUser){
         setLoading(false)
        }
        else{
          setUser(null)
          setLoading(false)
        }
        
    })
    return () => {
      return unsubscribe()
    }
  }, [])

   const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

   const updateUser=(updateData)=>{
        updateProfile(auth.currentUser , updateData)
    }

useEffect(() => {
    const fetchData = async () => {
      try {
        const districtRes = await fetch("/distric.json");
        const districtJson = await districtRes.json();
        const {data} = await axios(`${import.meta.env.VITE_SERVER_KEY}/count-all-donation`)
        console.log("donation data from " , data.count)
        const upazilaRes = await fetch("/Upazilas.json");

        const upazilaJson = await upazilaRes.json();
        setDonation(data.count)
        setDistrictData(districtJson[2].data);
        setUpazilas(upazilaJson[2].data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    updateUser,
    districtData,
    upazilas,
    donation
    
  }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider