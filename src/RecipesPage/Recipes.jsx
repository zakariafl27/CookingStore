import React from 'react'; 
import Card from './Card';


export default function Recipes() {
    return (
        <div>
            <div className='title-card text-center'>
                <h1 className='font-semibold  text-4xl'>Simple and tasty recipes</h1>

                <p className="max-w-md text-base text-gray-600 mx-auto p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur provident 
                    aliquid architecto nemo optio laudantium, illo aperiam accusamus doloribus.
                </p>

            </div>

            <Card />
        </div>
    )
}