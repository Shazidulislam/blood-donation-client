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
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
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
        setLoading(false)
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

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    updateUser
    
  }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider