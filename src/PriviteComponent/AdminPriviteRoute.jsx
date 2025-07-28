import { Navigate, useLocation } from 'react-router'
import LoadingSpner from '../Component/LoadingSpner'
import { useRole } from '../hook/useRole'
import useAuth from '../hook/useAuth'

const AdminPriviteRoute = ({ children }) => {
  const [role , ] = useRole()
  const { loading} = useAuth()
  const location = useLocation()

  if (loading ) return <LoadingSpner />
  if (role === "admin" || role ==="volunteer" ) return children
  return <Navigate to='/' state={{ from: location }} replace='true' />
}



export default AdminPriviteRoute;