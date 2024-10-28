import React from 'react'; 
import Card from '../Components/Card';
import Section from '../Layouts/Section'
import BlogPub from '../Components/BlogPub';
import DeliciousCard from '../Components/DeliciousCard';
import Inbox from '../Components/Inbox';
import Footer from '../Layouts/Footer';


export default function Recipes() {
    return (
        <div>
            <div className="w-[1280px] top-[60px] left-[140px] h-auto relative">
                <Card />
                <div className='absolute top-[1130px] left-[870px] '>
                    <BlogPub />
                </div>
            </div>
            <div className='absolute left-[170px] top-[2000px]'>
                <Inbox />
            </div>
            <div className='absolute left-[170px] top-[2700px] border-t-2'>
                <Footer />
            </div>
            
            
            
            
           

        </div>
    )
}