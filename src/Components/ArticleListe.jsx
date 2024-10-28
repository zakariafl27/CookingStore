import React from 'react'
import ArticleCard from './ArticleCard';
import { articles } from '../Tools/Blog_Articles';

export default function ArticleListe() {
  return (
    
        <div className="w-[840px] grid gap-y-[80px] relative">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      );
}
