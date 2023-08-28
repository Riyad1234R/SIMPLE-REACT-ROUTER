import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Setting = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Setting;