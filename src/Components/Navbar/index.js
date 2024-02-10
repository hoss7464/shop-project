import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()
    if (location.pathname === "/admindashboard" || location.pathname === "/userprofile" ) return null
    
    return (
        <div>
            navbar
        </div>
    );
};

export default Navbar;