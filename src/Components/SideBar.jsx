import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { LiaPizzaSliceSolid } from "react-icons/lia";

import logo from '../assets/logo-88.png'
const SideBar = () => {
  return (
    <div>
      <div className='bg-sidebar h-screen w-20 flex justify-center'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-8'>
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <MdOutlineDashboard size={30} />
            </div>
            <div>
              <AiOutlineFolderOpen size={30} />
            </div>
            <div>
              <FiBarChart2 size={30} />
            </div>
            <div>
              <LuUsers size={30} />
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <div>
              <GoQuestion size={30}/>
            </div>
            <div>
              <LiaPizzaSliceSolid size={30}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SideBar
