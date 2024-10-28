import React from 'react';
import { Tasty_Recipes } from '../Tools/Blog_Articles';

export default function BlogTastyRecipes() {
    return (
        <div className='w-[550px] h-[479px]'>
            <div className="text-black text-[32px] font-semibold mb-4">Tasty Recipes</div>
            <div className="space-y-6">
                {Tasty_Recipes.map((tasty, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <img className="w-[180px] h-[120px]"
                            src={`BlogImages/BlogTastyRecipes/${tasty.image}`}
                            alt={tasty.title}
                        />
                        <div className='mt-4'>
                            <p className="text-black text-xl font-semibold font-['Inter']">{tasty.title}</p>
                            <p className="text-black/60 text-sm font-medium py-3">By {tasty.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
};


