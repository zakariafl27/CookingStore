import React from 'react'
import ImageChef from './ImageChef'



export default function TextImage() {
  return (

    <div className="relative w-[1280px] h-[597px] left-[100px] top-[2000px] ">

  <div className="absolute w-[526px] h-[356px] left-0 top-[169px] ">
    <div className="left-0 top-0 absolute text-black text-5xl font-semibold font-['Inter']">
        Everyone can be a<br/>
        chef in their own kitchen
    </div>

    <div className="w-[508px] left-0 top-[160px] absolute 
                    text-black/60 text-base font-normal 
                    font-['Inter'] leading-7">
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqut enim ad minim 
    </div>

    <div className="w-[180px] h-[60px] left-0 top-[296px] absolute">
      <div className="w-[180px] h-[60px] left-0 top-0 absolute bg-black rounded-2xl" />
      <a href='#' className="left-[52px] top-[21px] absolute text-white text-sm font-semibold font-['Inter']">Learn More</a>
    </div>
  </div>

  <ImageChef />

</div>

  )
}
