import React from 'react';
import { Outlet } from 'react-router-dom';
import NavLink from '../Components/NavLink'
import NavLogo from '../Components/NavLogo'
import SocialMediaIcons from '../Components/SocialMediaIcons'

export default function Nav() {


  return (
    <div>

      <div className="relative w-[1279.96px] left-[135px] h-[30px] my-5 ">

        {/* Logo Foodieland */}

        <NavLogo />

        {/* Menu Links */}
        <div className="absolute w-[505px] h-[19px] left-[387px] top-[6px]">
          <NavLink />
        </div>
        


        {/* Social Media Icons */}
        
        <SocialMediaIcons />

      </div>


      <hr />
      <div className="container mx-auto p-4">
  <Outlet />
</div>



    </div>
  )
}

