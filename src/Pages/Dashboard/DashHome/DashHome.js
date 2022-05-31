import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>Welcome To Dashboard Mr/Mrs  <span style={{color:'#d63031'}}>{user?.displayName}</span></h1>
            
        </div>
    );
};

export default DashHome;