import React from 'react';

export default function RecipeCard({ title, time, category, image }) {
  return (
    <div className="relative w-[400px] h-[434px] bg-[#e7f9fd] rounded-[30px]
                    transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="absolute w-[400px] h-[250px] left-[1px] top-[1px]">
        <img
          src={`/RecipesImages/${image}`}
          alt={title}
          className="w-[396px] h-[253px] left-[1px] bottom-[1px]  absolute rounded-[30px]"
        />
      </div>
      <div className="absolute w-[352px] top-[260px] left-[24px] text-black text-2xl font-semibold ">{title}</div>
      <div className="absolute top-[368px] left-[44px] flex gap-4">
        <span className="text-sm text-black/60 font-medium">{time}</span>
        <span className="text-sm text-black/60 font-medium">{category}</span>
      </div>

    </div>
  );
}
