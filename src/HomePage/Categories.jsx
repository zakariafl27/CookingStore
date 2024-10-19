import React from 'react';
import './CategorieStyle.css';
import { CategoriesList } from '../Tools/CategoriesList'




export default function Categories() {
  return (
    <div className="w-[1280px] h-[342px] top-[140px] relative">
      <div className="text-black text-5xl font-semibold font-['Inter'] absolute top-[2px]">Categories</div>
      <div className="absolute top-0 right-0">
        <button className="w-[200px] h-[60px] bg-[#E7FAFE] rounded-2xl text-black text-base font-semibold font-['Inter']">
          View All Categories
        </button>
      </div>

      <div className="w-[1274px] h-[202px] mx-auto  top-[140px] relative grid grid-cols-6 gap-4">
        {CategoriesList.map((category, index) => (
          <div key={index} className="relative w-[179px] h-[202px]">
            <div
              className={`absolute w-[179px] h-[152px] top-[70px] rounded-[30px] bg-gradient-to-t from-${category.colorFrom} to-${category.colorTo}`}
            />
            <div className="absolute text-center text-black text-lg font-semibold left-[50px] font-['Inter'] top-[160px] w-[80.55px]">
              {category.name}
            </div>
            <div className="relative w-[99.44px] h-[100px] mx-auto top-[30px]">
              <img
                src={`/ImagesCategories/${category.image}`}
                alt={category.name}
                className="absolute w-full h-full blur-[20px]"
              />
              <img
                src={`/ImagesCategories/${category.image}`}
                alt={category.name}
                className="absolute w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
