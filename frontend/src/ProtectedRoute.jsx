import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

function ProtectedRoute() {
    const { user, isAuthenticate, loading } = useAuth()
    if(loading) return <h1>Loading ...</h1>

    if(!loading && !isAuthenticate) return <Navigate to='/' replace />

    return (
        <Outlet />
    )
}

export default ProtectedRoute