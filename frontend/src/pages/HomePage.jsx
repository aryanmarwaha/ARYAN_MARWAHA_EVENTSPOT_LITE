import FilterSection from "../components/FilterSection.jsx";
import EventHolder from "../components/EventHolder.jsx";

const HomePage = () => {
    return (
        <div className="w-full h-fit pb-[2rem] pt-[5rem] flex gap-[2rem]">
            <div className="w-[20rem] h-fit shrink-0">
                <FilterSection />
            </div>
            <div className="w-full h-fit">
                <EventHolder />
            </div>
        </div>
    )
}
export default HomePage;