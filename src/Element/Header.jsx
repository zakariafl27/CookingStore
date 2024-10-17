import React from 'react'
import './Headerstyle.css'


export default function Header() {
    return (

        <div className="header">
            <div className="header-contents bg-stone-50 rounded-lg">
                <div className='col-6'>
                    <img
                        src="/images/a1.png"
                        alt="Delicious Chicken"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>

                <div className='header-text mx-4 col-6 content-center'>
                    <h2 className="text-5xl font-bold mb-4 capitalize flow-root ">delicious chicken</h2>
                    <p className="text-gray-700 font-serif">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio maxime quaerat
                        architecto consequatur esse voluptates neque reiciendis blanditiis.
                        Tempora aut optio in quaerat sed odio dolor maiores animi id quas.
                    </p>
                    <div className='header-button'>
                        <button className="px-6 font-bold my-5 py-2 bg-stone-950 text-white rounded-full hover:text-gray-950 hover:bg-slate-300">
                            View Recipes
                        </button>
                    </div>
                </div>
            
            </div>

            {/* <div className='header-categories grid'>

                <div >
                    <h1 className='font-bold text-4xl capitalize'>categories</h1>
                </div>
                
                <div>
                    <button className='rounded-full text-sm font-bold capitalize bg-emerald-100 py-2 px-3 place-self-end'>view all categories</button>
                </div>
            </div> */}

        </div>

    );
}




