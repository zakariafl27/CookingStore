import React from "react";

export default function Header() {
  return (
    <div
      className="w-[1280px] h-[640px] relative mx-auto 
                    bg-emerald-50 rounded-3xl"
    >
      {/* Image principale */}
      <div className="absolute w-[660px] h-full right-0">
        <img
          className="w-[982px] h-[640px] object-cover"
          src="/images/a1.png"
        />
      </div>

      <div className="absolute left-[50px] top-[127px] w-[520px]">
        <h1 className="text-black text-[64px] font-semibold font-['Inter']">
          Spicy delicious chicken wings
        </h1>

        <p className="text-black/60 text-base font-['Inter']">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua enim ad minim.
        </p>
      </div>

      

      <div className="absolute w-[139px] h-10 left-[50px] top-[391px]">
        <div className="w-full h-full bg-black/5 rounded-[30px]" />
        <div className="absolute w-[107px] h-6 left-[16px] top-[8px] flex items-center space-x-2">
          <img className="w-6 h-6" src="/images/Time.png" alt="Time Icon" />

          <p className="absolute left-[23px] text-black/60 text-sm font-medium font-['Inter']">
            30 Minutes
          </p>
        </div>
      </div>

      <div className="absolute w-[119px] h-10 left-[205px] top-[391px]">
        <div className="w-full h-full bg-black/5 rounded-[30px]" />
        <div className="absolute w-[87px] h-6 left-[16px] top-[8px] flex items-center space-x-2">
          <img
            className="w-6 h-6"
            src="/images/ForkKnife.png"
            alt="Fork and Knife Icon"
          />
          <p className="text-black/60 text-sm font-medium font-['Inter']">
            Chicken
          </p>
        </div>
      </div>

      <div className="absolute w-[200px] h-[60px] left-[370px] top-[530px]">
        <div className="w-full h-full bg-black rounded-2xl" />
        <div
          className="absolute w-[127px] h-6 
                        left-[37px] top-[18px] 
                        flex items-center space-x-2"
        >
          <button className="text-white text-sm font-semibold font-['Inter']">
            View Recipes
          </button>
          <img className="w-6 h-6" src="/images/Play.png" alt="Play Icon" />
        </div>
      </div>

      <div className="absolute w-[156px] h-[45px] left-[50px] top-[50px]">
        <div className="absolute w-[156px] h-[45px] left-0 top-0 bg-white rounded-[30px]" />
        <div className="absolute w-[116px] h-6 left-[20px] top-[11px]">
          <p className="absolute left-[30px] top-[1px]  text-black text-sm font-semibold font-['Inter']">
            Hot Recipes
          </p>
          <img
            className="absolute Image14 w-6 h-6 top-0 "
            src="/images/HotRecipes.png"
          />
        </div>
      </div>

      <div className="absolute w-[163px] h-[50px] left-[50px] top-[535px] ">
        <img
          className="absolute w-[50px] h-[50px] left-0 top-0  rounded-full"
          src="/images/a1.png"
        />
        <div className="absolute left-[63px] top-[3px]  text-black text-base font-bold font-['Inter']">
          John Smith
        </div>
        <div className="absolute left-[63px] top-[30px]  text-black/60 text-sm font-medium font-['Inter']">
          15 March 2022
        </div>
      </div>

    </div>
  );
}
