import React from 'react';
import DeliciousRecipe from './DeliciousRecipe';
import { Delicious_List } from '../Tools/Recipes_List';

export default function DeliciousCard() {
    


  return (
    <div className="w-[1280px] top-[2170px] left-[120px] h-auto relative">
      <div className="absolute left-[177px] top-0 
                      text-black text-5xl font-semibold"
      >
        Try this delicious recipe
        to make your day
        
        <span className="absolute top-[82px] left-[120px] w-[706px] 
                      text-center text-black/60 text-base leading-7"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      </div>

      

      <div className="flex flex-wrap absolute gap-8 mt-[234px]">
        {Delicious_List.map((delicious, index) => (
          <DeliciousRecipe
            key={index}
            title={delicious.title}
            time={delicious.time}
            part={delicious.part}
            image={delicious.image}
          />
        ))}

      </div>

    </div>

  );
}
