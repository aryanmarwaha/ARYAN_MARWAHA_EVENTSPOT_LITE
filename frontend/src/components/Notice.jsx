import { useState } from "react";
import {
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notice = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-fit flex flex-col bg-white rounded-lg py-4 px-4 text-gray-600">
            <div
                className="w-full h-full flex items-center cursor-pointer leading-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="w-[2rem]">
                    <FontAwesomeIcon
                        icon={isOpen ? faChevronUp : faChevronDown}
                        className=""
                    />
                </div>
                Notice{" "}
                <span className="w-[2rem] flex ml-auto justify-center">
                    <span className="h-[0.8rem] w-[0.8rem] rounded-full shadow bg-[#ff0000] animate-pulse"></span>
                </span>
            </div>
            {isOpen && (
                <div className="text-justify p-2 pt-4 max-h-fit animate-moveIntoViewTopToBottom overflow-clip">
                    Just a heads-up! The mock data used in this application was
                    generated using ChatGPT, so you might notice a few
                    inconsistencies here and there. Since the requirements
                    specified that backend capabilities weren't necessary, the
                    frontend does make network requests efficiently (using
                    caching), but the backend is set up to return the same list
                    of events each time.
                </div>
            )}
        </div>
    );
};


export default Notice;