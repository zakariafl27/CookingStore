import React from 'react'

export default function ArticleCard({ title, description, author, date, image, authorImage }) {
  return (
    
        <div className="relative right-[250px] w-[840px] top-[400px] h-[200px]">
          <div className="absolute w-[290px] h-[200px] ">
            <img className="gap-y-4 w-[290px] h-[250px] rounded-[20px] top-[-20px]" 
                 src={`BlogImages/ArticleImage/${image}`}
                 alt={title} 
                 />
          </div>
          <div className="absolute left-[330px] top-[40px]">
            <a href="#" className="text-black text-2xl font-semibold font-['Inter']">{title}</a>
            <div className="w-[510px] text-black/60 text-base
                            font-normal font-['Inter'] leading-7 mt-2">
                {description}
            </div>

            <div className="flex items-center mt-6">

              <img className="w-10 h-10 rounded-full" 
                   src={`BlogImages/AuthorImage/${authorImage}`} 
                   alt={author} 
                />

              <div className="ml-4">
                <div className="text-black text-base font-bold font-['Inter']">{author}</div>
              </div>
            </div>
            <div className="absolute text-black/60 text-sm font-medium left-[207px] top-[146px]">{date}</div>
          </div>
        </div>
      );

}
 