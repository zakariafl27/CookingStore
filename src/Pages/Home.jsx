import Section from "../Layouts/Section";
import Categories from "../Components/Categories";
// import Recipes from "./Recipes";
import TextImage from "../Components/TextImage";
import Inbox from "../Components/Inbox";
// import Footer from "../Layouts/Footer";
import DeliciousCard from "../Components/DeliciousCard";
import Card from "../Components/Card";
import Footer from '../Layouts/Footer';


export default function Home() {
    return (
        <div>
            <Section />
            <Categories />
            <div className="w-[1280px] top-[270px] left-[120px] h-auto relative">
                <Card />
            </div>
            
            <TextImage />
            <div className="w-[1280px] top-[2170px] left-[120px] h-auto relative">
                <DeliciousCard />
            </div>

            <div className="relative w-[1280px] top-[3900px] left-[100px] h-[442px] " >
                <Inbox />
            </div>

            <div className='absolute left-[110px] right-0 top-[6200px] border-t-2'>
                <Footer />
            </div>

        </div>
    );
}
