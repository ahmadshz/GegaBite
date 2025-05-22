import React from 'react'
import { Navigate } from 'react-router-dom'

const RequireBack = () => {
    const token = localStorage.getItem('access_token')
    return token ? <Navigate to={'/'}  /> : <Navigate to={'/login'} replace={true} />
}

export default RequireBack