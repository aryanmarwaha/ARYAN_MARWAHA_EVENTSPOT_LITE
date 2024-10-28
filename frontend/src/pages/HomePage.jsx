import FilterSection from "../components/FilterSection.jsx";
import EventHolder from "../components/EventHolder.jsx";
import Notice from "../components/Notice.jsx";
import { useState } from "react";
const HomePage = () => {
    const [showFilter, setShowFilter] = useState(false);
    return (
        <>
            <div className="flex-col md:flex-row w-full h-fit pb-[2rem] pt-[1rem] sm:pt-[5rem] flex justify-between gap-[2rem]">
                <div
                    className={`md:flex flex-col gap-[2rem] md:w-[20rem] h-full shrink-0 md:order-2 max-h-fit animate-[moveIntoViewTopToBottom_0.5s_ease-in-out] overflow-clip 
                        ${showFilter? "flex" : "hidden"}
                    `}
                >
                    <FilterSection />
                    <Notice />
                </div>
                <div className={`w-fit md:w-full h-fit shrink md:order-1`}>
                    <EventHolder showFilter={showFilter} setShowFilter={setShowFilter}/>
                </div>
            </div>
        </>
    );
};

export default HomePage;
