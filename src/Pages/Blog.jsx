// import ArticleCard from "../Components/ArticleCard";
import ArticleListe from "../Components/ArticleListe";
// import Inbox from "../Components/Inbox";


export default function Blog() {
    return (
        <div className="relative w-[840px] left-[300px] h-[289px]">
            <h1 className="absolute top-0 left-[228px] text-center text-black text-[64px] font-semibold font-['Inter']">
                Blog & Article
            </h1>
            <p className="absolute top-[101px] left-0 w-full text-center text-black/60 text-base font-normal font-['Inter'] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
            <div className="absolute top-[209px] left-[70px] w-[700px] h-20">
                <div className="absolute w-full h-full bg-white rounded-3xl border border-black/10 z-10">
                    <input
                        className="absolute outline-none hover:text-black left-[32px] top-[31px] 
                                   text-black/40 text-sm font-medium font-['Inter'] z-20 "
                        placeholder="Search article, news or recipe..."
                        type="text"
                    />
                </div>
                <div className="absolute left-[530px] top-[10px] w-40 h-[60px] z-10">
                    <div className="absolute w-full h-full bg-black rounded-2xl">
                        <a href="/" className="absolute left-[57px] top-[21px] text-white text-sm font-semibold font-['Inter'] z-20">
                            Search
                        </a>
                    </div>
                </div>

            </div>
            <ArticleListe />
            {/* <div className="absolute inset-0 flex items-center justify-center">
  <Inbox />
</div> */}

            
        </div>
        
    )
}
