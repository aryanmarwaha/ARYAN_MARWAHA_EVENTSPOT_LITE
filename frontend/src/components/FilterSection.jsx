import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const FilterSection = () => {
    const [dateFilters, setDateFilters] = useState([]);
    const [languageFilters, setLanguageFilters] = useState([]);
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [priceFilters, setPriceFilters] = useState([]);

    const DateArray = ["today", "tomorrow", "this-Week", "next-Week"];
    const LanguageArray = ["English", "Hindi", "Punjabi", "Tamil"];
    const CategoryArray = ["Music", "Theatre", "Dance", "Comedy", "Sports"];
    const PriceArray = ["150 - 500", "500 - 1000", "1000 - 1500", "2000+"];


    return (
        <div className="w-full h-fit flex flex-col gap-2 shrink-0">
            <h1 className="text-2xl font-bold text-[#333333] pb-4 shrink-0">Filters</h1>
            <FilterElement
                filterName={"Date"}
                filters={dateFilters}
                setFilters={setDateFilters}
                filterOptionArray={DateArray}
            />
            <FilterElement
                filterName={"Language"}
                filters={languageFilters}
                setFilters={setLanguageFilters}
                filterOptionArray={LanguageArray}
            />
            <FilterElement
                filterName={"Category"}
                filters={categoryFilters}
                setFilters={setCategoryFilters}
                filterOptionArray={CategoryArray}
            />
            <FilterElement
                filterName={"Price"}
                filters={priceFilters}
                setFilters={setPriceFilters}
                filterOptionArray={PriceArray}
            />
        </div>
    );
};



const FilterElement = ({
    filterName,
    filters,
    setFilters,
    filterOptionArray,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex flex-col justify-center bg-white text-gray-600 rounded-md">
            <div className="w-full h-[3rem] flex justify-between">
                <div
                    className="w-fit h-[3rem] flex items-center px-4 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-[2rem]">
                        <FontAwesomeIcon
                            icon={isOpen ? faChevronUp : faChevronDown}
                            className="text-md"
                        />
                    </div>
                    <span className={`${isOpen ? "text-[#ff0000]" : ""}`}>
                        {filterName}
                    </span>
                </div>
                <button
                    className="px-4 text-gray-400 hover:text-[#ff0000] transition-colors duration-150"
                    onClick={() => {
                        setFilters([]);
                    }}
                >
                    clear
                </button>
            </div>
            {isOpen && (
                <div className="w-full h-fit px-4 flex flex-wrap gap-2 pb-6">
                    {filterOptionArray.map((optionName) => (
                        <FilterOption
                            filter={filters}
                            setFilters={setFilters}
                            optionName={optionName}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
const FilterOption = ({ filter, setFilters, optionName }) => {
    const [isActive, setIsActive] = useState(filter.includes(optionName));
    useEffect(() => {
        setIsActive(filter.includes(optionName));
    }, [filter]);
    console.log(filter);
    return (
        <button
            className={`px-3 py-1 rounded-sm  ${
                isActive ? "bg-[#e72222] text-white" : "text-gray-600 border"
            } shrink-0`}
            onClick={() => {
                if (isActive) {
                    setFilters(
                        filter.filter((filterName) => {
                            return filterName !== optionName;
                        }),
                    );
                    setIsActive(false);
                } else {
                    setFilters([...filter, optionName]);
                    setIsActive(true);
                }
            }}
        >
            {optionName}
        </button>
    );
};

export default FilterSection;