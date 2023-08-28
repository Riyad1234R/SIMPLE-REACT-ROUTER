import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <Link to={'/'}>Home</Link>
            <Link to={'/riad'}>riad</Link>
            <Link to={'/friends'}>friends</Link>
            <Link to={'friendDetail'}>frienddetail</Link>
            
        </div>
    );
};

export default Navbar;