import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between w-9/12 mx-auto bg-slate-400 mt-4 items-center'>
            <div>
                <h1 className='text-blue-600 font-bold text-xl ml-4 p-4'> <Link to={'/'}> ipl 2023 shidule</Link> </h1>
            </div>
            <div >
                <ul className='flex'>
                    <li className='mr-4'>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to={'/'}>Home</NavLink>
                    </li>
                    <li  className='mr-4'>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to={'News'}>News</NavLink>
                    </li >
                    <li  className='mr-4'>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to={'Standings'}>Standings</NavLink>
                    </li >
                    <li  className='mr-4'>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to={'Players'}>Players</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;