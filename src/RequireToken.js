import React from 'react';
import { Navigate } from 'react-router-dom';
const RequireToken = ({ element }) => {
    const hasToken = sessionStorage.getItem('token');
    // Implement your token existence check logic
    return hasToken ? element : <Navigate to="/login" />;
   
};
export default RequireToken;