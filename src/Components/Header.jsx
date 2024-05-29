import React from 'react'
import { IoSearch } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";

import user from '../assets/user.jpg';
const Header = () => {
    return (
        <div className='flex'>
            <div className='flex items-center w-[70%] justify-between pl-10 '>
                <h1>All Projects</h1>
                <div className='w-80 h-10 bg-search rounded-2xl relative flex items-center gap-2'>
                    <IoSearch size={25} className='w-30 h-30' />
                    <input type="text" placeholder='Search Here..' className='bg-transparent' />
                </div>
                <div className='flex bg-black w-28 h-10 gap-2 pl-2 text-white rounded-xl items-center '>
                    <CiCalendar size={20} />
                    <h1>Calendar</h1>
                </div>
            </div>
            <div className='flex w-[30%] ml-10 gap-4 items-center justify-center'>
                <div className='bg-search rounded-full flex items-center justify-center w-10 h-10'>
                    <IoMdNotificationsOutline size={30} />
                </div>
                <div className='bg-search rounded-full flex items-center justify-center w-10 h-10'>
                    <IoSettingsOutline size={30} />
                </div>
                <div className='flex justify-center items-center gap-4 bg-search'>
                    <div>
                        <img src={user} alt="user" style={{ backgroundSize: 'cover', backgroundPosition: 'contain', height: '5vh' }} className='w-6 rounded-full' />
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-xl'>Ahmed Yahyaoui</h1>
                        <p>Software Dev</p>
                    </div>
                    <div>
                        <CiMenuKebab size={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
