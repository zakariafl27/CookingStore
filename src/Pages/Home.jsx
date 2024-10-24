import Section from "../Layouts/Section";
import Categories from "../Components/Categories";
// import Recipes from "./Recipes";
import TextImage from "../Components/TextImage";
import Inbox from "../Components/Inbox";
// import Footer from "../Layouts/Footer";
import DeliciousCard from "../Components/DeliciousCard";
import Card from "../Components/Card";


export default function Home() {
    return (
        <div>
            <Section />
            <Categories />
            <Card />
            <TextImage />
            <DeliciousCard />
            <Inbox />
            
            {/* <Footer /> */}
        </div>
    );
}
