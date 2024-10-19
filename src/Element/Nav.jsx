import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavStyle.css';
import {Links} from '../Tools/Links'

export default function Nav() {


  return (
    <div>


      <div className="Navigation relative w-[1279.96px] h-[30px] mx-[50px] my-5 ">
        {/* Logo Foodieland */}
        <div className="Foodieland">
          <span className="text-black text-2xl font-normal font-['Lobster']">
            Foodieland</span>
          <span className="text-[#ff7426] text-2xl font-normal font-['Lobster']">
            .
          </span>
        </div>

        {/* Menu Links */}
        <div className="absolute w-[505px] h-[19px] left-[387px] top-[6px]">
        <ul className="flex justify-between items-center w-full h-full">
            {Links.map((link, index)=>(
              <li key={index} className='no-underline hover:underline'>
                <Link to={link.path}  
                      className="text-dark text-lg font-semibold hover:text-slate-700">
                        {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Social Media Icons */}
        <div className="Social absolute w-[133.96px] h-[22px] left-[1146px] top-[4px]  flex space-x-4">
          <div className="SocialIcon w-[22px] h-[22px] relative">
            <img
              className="w-full h-full"
              src="/IconSocialMedia/facebook.png"
              alt="Facebook"
            />
          </div>
          <div className="SocialIcon w-[22px] h-[22px] relative">
            <img
              className="w-full h-full"
              src="/IconSocialMedia/twitter.png"
              alt="Twitter"
            />
          </div>
          <div className="SocialIcon w-[22px] h-[22px] relative">
            <img
              className="w-full h-full"
              src="/IconSocialMedia/instagram.png"
              alt="Instagram"
            />
            <div className="Oval w-[1.47px] h-[1.47px] absolute left-[16.18px] top-[4.35px] bg-black rounded-full" />
          </div>
        </div>

      </div>


      <hr />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>


    </div>
  )
}

