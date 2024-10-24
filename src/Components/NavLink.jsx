import React from 'react'
import {Links} from '../Tools/Links'
import { Link } from 'react-router-dom';

export default function NavLink() {
  return (

    
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
  )
}
