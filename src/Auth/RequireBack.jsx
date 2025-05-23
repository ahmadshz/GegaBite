import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RequireBack = () => {
    const token = localStorage.getItem('access_token')
    return token ? <Navigate to={'/'}  /> : <Outlet />
}

export default RequireBack