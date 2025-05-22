import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
    const token = localStorage.getItem('access_token')

    return token ? <Outlet /> : <Navigate to={'/login'} replace={true} />
}

export default RequireAuth