import React from 'react'
import './CategorieStyle.css'
import { Categories_List } from '../Tools/tools'

export default function Categories() {
    return (
        <div>
            <div className='mx-9'>

                <div>
                    <h1 className='font-bold text-4xl capitalize'>categories</h1>

                    <button className='rounded-full text-sm font-bold capitalize bg-emerald-100 py-2 px-3'>view all categories</button>
                </div>

                <div className='categorie-item
                                grid grid-cols-2 md:grid-cols-6 gap-6
                                bg-zinc-100 rounded-full'
                 >
                   {Categories_List.map((item,index)=>(
                    <div key={index} className=' text-center py-4'>
                        <img className='w-30 object-cover rounded-full' src={item.Categorie_img} alt="" />
                        <p className='text-lg font-semibold text-'>{item.Categorie_name}</p>
                    </div>
                   ))}
                </div>

            </div>
        </div>
    )
}
