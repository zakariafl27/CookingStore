import React from 'react'
import PicturesInbox from './PicturesInbox'

export default function Inbox() {
    return (
        <div>

            <PicturesInbox/>

            <div className="absolute w-[620px] h-[282px] left-[330px] top-[70px] ">
                <div className="absolute  left-[15px] text-black text-5xl 
                                font-semibold font-['Inter'] text-center">
                    Deliciousness to your inbox
                </div>

                <div className="absolute w-[620px] left-0 top-[116px] my-2 text-center 
                                text-black/60 text-base font-normal font-['Inter'] leading-7">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
                </div>

                <div className="absolute w-[480px] h-20 left-[70px] top-[252px] bg-white rounded-3xl" />
                <input type='email' placeholder='Your email address...' 
                className="absolute left-[102px] top-[282px] text-black/40 
                            outline-none text-sm font-medium font-['Inter']" />
                    
                

                <div className="w-40 h-[60px] left-[380px] top-[262px] absolute">
                    <div className="absolute w-40 h-[60px] left-0 top-0 bg-black rounded-2xl" />
                    <a href='/' className="absolute left-[47px] top-[21px] 
                                    text-white text-sm font-semibold font-['Inter']">
                        Subscribe
                    </a>
                </div>
            </div>
        </div>
    )
}
