import React from 'react';
import RecipeCard from './RecipeCard';
import { recipes } from '../Tools/Recipes_List';

export default function Card() {


  return (
    <div>

    
      <div className="absolute left-[377px] top-0 
                      text-black text-5xl font-semibold"
      >
        Simple and tasty recipes
      </div>

      <div className="absolute top-[82px] left-[284px] w-[706px] 
                      text-center text-black/60 text-base leading-7"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div className="flex flex-wrap absolute gap-8 mt-[234px]">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            time={recipe.time}
            category={recipe.category}
            image={recipe.image}
          />
        ))}

      </div>
      </div>


  );
}
