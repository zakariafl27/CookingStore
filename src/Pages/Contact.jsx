import React from "react";
import Inbox from "../Components/Inbox";
import DeliciousCard from "../Components/DeliciousCard";
import Footer from '../Layouts/Footer';

export default function Contact() {
    return (


        <div className="relative left-[100px] top-[60px] w-[1280px] h-[733px]">
            {/* Left Image and Gradient Background Section */}
            <div className="absolute top-[149px] left-0 w-[400px] h-[472px]">
                <div className="absolute w-full h-[432px] top-[40px] 
                                bg-gradient-to-b from-[#e7f9fd] to-[#e7f9fd] rounded-[30px]" />
                <img className="absolute w-[350px] h-[472px] left-[30px]"
                    src="Images/Group 13936.png"
                    alt="Placeholder" />
            </div>

            {/* Contact Form Title */}
            <div className="absolute top-0 left-[440px] text-black text-[64px] 
                            font-semibold font-['Inter']">
                Contact us
            </div>

            {/* Contact Form */}
            <div className="absolute top-[157px] left-[440px] w-[840px] h-[576px]">
                {/* Name Field */}
                <div className="w-[400px] h-[92px] relative">
                    <input type="text" className="absolute top-[32px] w-full h-[60px]
                                    rounded-2xl border border-black/10 text-zinc-950
                                    pl-6 text-lg"
                        placeholder="Enter your name..." />
                    <label className="absolute top-0 left-0 text-xs font-medium 
                                      tracking-wide text-black/60 uppercase">
                        Name
                    </label>

                </div>

                {/* Email Address Field */}
                <div className="w-[400px] h-[60px] absolute top-0 left-[440px]">
                    <input type="text" className="absolute top-[32px] w-full h-[60px]
                                    rounded-2xl border border-black/10 text-zinc-950 
                                    pl-6 text-lg"
                        placeholder="Your email address..." />
                    <label className="absolute top-[1px] left-0 text-xs font-medium 
                                      tracking-wide text-black/60 uppercase">
                        Email Address
                    </label>

                </div>

                {/* Enquiry Type Field */}
                <div className="w-[400px] h-[60px] absolute top-[148px] left-[440px]">
                    <input type="text" className="absolute w-full h-[60px]
                                    rounded-2xl border border-black/10 text-zinc-950
                                    pl-6 text-lg"
                        placeholder="Enquiry type..." />
                    <label className="absolute top-[-32px] left-0 text-xs font-medium 
                                      tracking-wide text-black/60 uppercase">
                        Enquiry Type
                    </label>

                </div>

                {/* Subject Field */}
                <div className="w-[400px] h-[60px] absolute top-[148px]">
                    <input type="text" className="absolute w-full h-[60px]
                                    rounded-2xl border border-black/10 text-zinc-950
                                    pl-6 text-lg"
                        placeholder="Subject..." />
                    <label className="absolute top-[-32px] left-0 text-xs font-medium 
                                        tracking-wide text-black/60 uppercase">
                        Subject
                    </label>

                </div>

                {/* Messages Field */}
                <div className="w-[840px] h-[200px] absolute top-[264px]">
                    <textarea className="w-full h-full p-4 text-zinc-950
                                    pl-6 text-lg border border border-gray-300 rounded-2xl"
                        placeholder="Enter your message..."></textarea>
                    <label className="absolute top-[-32px] left-0 text-xs font-medium 
                                        tracking-wide text-black/60 uppercase">
                        Messages
                    </label>


                </div>

                {/* Submit Button */}
                <button className="absolute top-[512px] w-[180px] h-16 bg-black rounded-2xl 
                                    flex items-center justify-center text-white text-base 
                                    font-semibold font-['Inter']">
                    Submit
                </button>
            </div>
            <div className="relative w-[1280px] top-[900px] h-[442px] py-7" >
                <div className="absolute">
                    <Inbox />
                </div>
            </div>

            <div className='absolute left-[20px] top-[1550px] border-t-2'>
                <Footer />
            </div>
            
            
        </div>

    )
}