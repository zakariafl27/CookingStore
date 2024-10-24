import React from 'react'
import { Social_Icon } from '../Tools/SocialIcon'

export default function SocialMediaIcons() {
  return (
    <div className="Social absolute w-[133.96px] h-[22px] left-[1146px] top-[4px]  flex space-x-5">
        {Social_Icon.map((smc,index)=>(
            <div key={index} className="SocialIcon w-[22px] h-[22px] relative">
                <img
                    className="w-full h-full object-contain cursor-pointer transition-transform duration-200 hover:scale-110"
                    src={`/IconSocialMedia/${smc.icon}`}
                    alt={smc.name} 
                />
            </div>
        ))}
    </div>
  )
}
