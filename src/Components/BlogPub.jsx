import React from 'react';

export default function BlogPub() {
    return (
        <div>
            <div className="relative w-[400px] h-[434px] mt-9 ">
                <div className="absolute w-[400px] h-[434px] bg-gradient-to-b from-[#357255] to-[#042f2e] rounded-[40px] " />
                <div className="absolute text-center text-white text-2xl font-normal font-['Lobster'] left-[114px] top-[40px]">
                    Don’t forget to eat <br /> healthy food
                </div>
                <img
                    className="absolute w-[354px] h-[336px] left-[22px] top-[98px]"
                    src="/BlogImages/BlogTastyRecipes/01.png"
                    alt="Tasty recipe"
                />
                <div className="absolute text-white/60 text-sm font-medium font-['Inter'] left-[132px] top-[385px]">
                    www.foodieland.com
                </div>
            </div>
        </div>
    );
}
