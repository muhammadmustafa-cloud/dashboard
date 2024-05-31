import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Profile = () => {
    return (
        <div>
            <div className='w-[80%] h-20 bg-search'>
                <div className='flex items-center gap-16'>
                    <div className='flex gap-6 items-center'>
                        <div className='flex justify-center items-center bg-white w-10 h-10 border-2'>
                            <FaUserGroup />
                        </div>
                        <div>Users</div>
                    </div>
                    <div>
                        <div >
                            <ul className='flex gap-8'>
                                <li>AllUsers</li>
                                <li>Editor</li>
                                <li>Contributor</li>
                                <li>Author</li>
                                <li>Administration</li>
                                <li>Subscriber</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex w-40 text-white h-10 rounded-xl px-4 items-center gap-2 bg-purple-500'>
                        <FaCirclePlus size={20} />
                        <button >Add New User</button>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <h1>Select All</h1>
                    </div>
                    <div className='flex'>
                        <div className='flex gap-3 w-40 h-10 border bg-white items-center'>
                            <FaUserAlt size={15}/>
                            <h1 className='font-semibold'>Change Status</h1>
                        </div>
                        <div className='flex gap-3 w-24 h-10 border bg-white items-center'>
                            <FaSearch size={15}/>
                            <h1 className='font-semibold'>Search</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
