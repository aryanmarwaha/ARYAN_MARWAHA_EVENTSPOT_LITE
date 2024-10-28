import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setFilterDate,
    removeFilterDate,
    resetFilterDate,
    setFilterLanguage,
    removeFilterLanguage,
    resetFilterLanguage,
    setFilterCategory,
    removeFilterCategory,
    resetFilterCategory,
    setFilterPrice,
    removeFilterPrice,
    resetFilterPrice,
} from "../redux/slices/filterEvent.slice.js";
import {
    selectDateFilters,
    selectLanguageFilters,
    selectCategoryFilters,
    selectPriceFilters,
} from "../redux/slices/filterEvent.slice.js";

const FilterSection = () => {
    const DateArray = ["today", "tomorrow", "this-Week", "next-Week"];
    const LanguageArray = ["English", "Hindi", "Punjabi", "Tamil"];
    const CategoryArray = ["Music", "Theatre", "Dance", "Comedy", "Sports"];
    const PriceArray = ["150 - 500", "500 - 1000", "1000 - 1500", "2000+"];

    return (
        <div className="w-full h-fit flex flex-col gap-2 shrink-0">
            <h1 className="text-2xl font-bold text-[#333333] pb-4 shrink-0">
                Filters
            </h1>
            <FilterElement
                filterName={"Date"}
                filterOptionArray={DateArray}
                selectFilterFn={selectDateFilters}
                setAction={setFilterDate}
                removeAction={removeFilterDate}
                resetAction={resetFilterDate}
            />
            <FilterElement
                filterName={"Language"}
                filterOptionArray={LanguageArray}
                selectFilterFn={selectLanguageFilters}
                setAction={setFilterLanguage}
                removeAction={removeFilterLanguage}
                resetAction={resetFilterLanguage}
            />
            <FilterElement
                filterName={"Category"}
                filterOptionArray={CategoryArray}
                selectFilterFn={selectCategoryFilters}
                setAction={setFilterCategory}
                removeAction={removeFilterCategory}
                resetAction={resetFilterCategory}
            />
            <FilterElement
                filterName={"Price"}
                filterOptionArray={PriceArray}
                selectFilterFn={selectPriceFilters}
                setAction={setFilterPrice}
                removeAction={removeFilterPrice}
                resetAction={resetFilterPrice}
            />
        </div>
    );
};

const FilterElement = ({
    filterName,
    filterOptionArray,
    selectFilterFn,
    setAction,
    removeAction,
    resetAction,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const filter = useSelector(selectFilterFn);
    const dispatch = useDispatch();

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
                        dispatch(resetAction());
                    }}
                >
                    clear
                </button>
            </div>
            {isOpen && (
                <div className="w-full max-h-fit px-4 flex flex-wrap gap-2 pb-6 overflow-clip animate-moveIntoViewTopToBottom">
                    {filterOptionArray.map((optionName) => (
                        <FilterOption
                            key={optionName}
                            optionName={optionName}
                            dispatchAction={() => {
                                if (!filter.includes(optionName)) {
                                    dispatch(setAction(optionName));
                                } else {
                                    dispatch(removeAction(optionName));
                                }
                            }}
                            isActive={filter.includes(optionName)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
const FilterOption = ({ dispatchAction, optionName, isActive }) => {
    return (
        <button
            className={`px-3 py-1 rounded-sm  ${
                isActive ? "bg-[#e72222] text-white border border-[#e72222]" : "text-gray-600 border"
            } shrink-0`}
            onClick={() => dispatchAction()}
        >
            {optionName}
        </button>
    );
};

export default FilterSection;
