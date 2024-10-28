import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className="w-[1300px] h-[193px] bg-white bottom-0 flex justify-between pt-6 border-b-2">
            <div className="flex flex-col">
                <div className="flex">
                    <span className="text-black text-2xl font-['Lobster']">Foodieland</span>
                    <span className="text-[#ff7426] text-2xl font-['Lobster']">.</span>
                </div>
                <p className="text-black/60 text-base font-['Inter'] leading-7 mt-4">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit.
                </p>
            </div>
            <nav className="flex space-x-8 w-[200px] bottom-[-32px]">
                <Link to="/recipes" className="text-black text-base font-medium font-['Inter']">Recipes</Link>
                <Link to="/blog" className="text-black text-base font-medium font-['Inter']">Blog</Link>
                <Link to="/contact" className="text-black text-base font-medium font-['Inter']">Contact</Link>
            </nav>
        </div>
    );
}
