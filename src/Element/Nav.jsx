import React from 'react';
import {Link, Outlet} from 'react-router-dom';


export default function Nav(){
    return(
        <div>
            <nav>
                <div className="container mx-auto flex items-center justify-between my-2 py-3">
                    <a href="#" className="text-dark text-2xl font-bold italic">
                        foodieland
                    </a>
                    <div className="w-full flex justify-center">
                        <ul className="flex space-x-8">
                            <li>
                                <Link to="/" className="text-dark text-lg font-semibold hover:text-slate-700">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/recipes" className="text-dark text-lg font-semibold hover:text-slate-700">
                                    Recipes
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-dark text-lg font-semibold hover:text-slate-700">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-dark text-lg font-semibold hover:text-slate-700">
                                    Contact
                                </Link>
                            </li>
                            <button className=''>
                                <Link to="/about" className="text-dark text-lg font-semibold hover:text-slate-700">
                                    About Us
                                </Link>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr/>
            <div className="container mx-auto p-4">
                <Outlet />
            </div>

            
        </div>
    )
}
        
