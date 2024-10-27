import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faCaretDown,
    faClockRotateLeft,
    faHouse,
    faLocation,
    faLocationDot,
    faMagnifyingGlass,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/png/eventspot1.png";
import UserImg from "../../assets/jpg/userImg.jpeg";
import { SearchBoxRecommendationLoader } from "../Loaders/SearchBoxRecommendationLoader.jsx";
import { axiosInstance } from "../../lib/axios.js";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const [searchActive1, setSearchActive1] = useState(false);
    return (
        <div className="w-screen h-[4rem] flex items-center justify-center border-b border-gray-300">
            <div className="w-[calc(100%-2rem)] h-full lg:w-[60rem] xl:w-[80rem] flex px-4 bg-white justify-between shrink-0 gap-4">
                {/* left-partition */}
                <div className="flex w-full h-full items-center gap-4 py-2">
                    <div className="h-full flex items-center gap-1 font-semibold text-red-500 shrink-0">
                        <img src={Logo} className="h-full shrink-0" />
                    </div>
                    <SearchBox
                        searchActive1={searchActive1}
                        setSearchActive1={setSearchActive1}
                    />
                </div>
                {/* right-partition */}
                <div className="h-full flex items-center gap-[1.5rem] py-2 shrink-0 ">
                    {/* <HomeIcon /> */}
                    <LocationIcon searchActive1={searchActive1} />
                    {!searchActive1 && (
                        <SearchIcon setSearchActive1={setSearchActive1} />
                    )}
                    <NotificationIcon searchActive1={searchActive1} />
                    <MeIcon />
                </div>
            </div>
        </div>
    );
};
const SearchBox = ({ searchActive1, setSearchActive1 }) => {
    const [searchActive2, setSearchActive2] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return (
        <div
            className={`h-full w-full md:flex max-w-[30rem] items-center bg-[#EDF3F8] rounded-md px-4 lg:shrink-0 relative ${
                searchActive2 && "outline outline-2"
            } 
            ${!searchActive1 ? "hidden" : "flex"}`}
        >
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-black text-lg cursor-pointer"
            />
            <input
                className="h-full w-full rounded-lg outline-none px-2 bg-transparent truncate"
                placeholder="Use names or artist names to find events in your area."
                onFocus={() => {
                    setSearchActive2(true);
                }}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            {(searchActive1 || searchActive2) && (
                <RecommendationSection
                    inputValue={inputValue}
                    setSearchActive1={setSearchActive1}
                    searchActive2={searchActive2}
                    setSearchActive2={setSearchActive2}
                />
            )}
        </div>
    );
};

const RecommendationSection = ({
    inputValue,
    setSearchActive1,
    searchActive2,
    setSearchActive2,
}) => {
    return (
        <>
            <div
                className="h-[calc(100vh-4rem)] w-screen fixed top-[4rem] left-0 bg-black opacity-[0.6] animate-FadeInToView"
                onClick={() => {
                    setSearchActive1(false);
                    setSearchActive2(false);
                }}
            />
            {inputValue.length > 0 ? (
                <TypeAheadSection inputValue={inputValue} />
            ) : (
                <OverviewRecommendationSection />
            )}
        </>
    );
};
const OverviewRecommendationSection = () => {
    return (
        <div className="h-fit w-full absolute top-[3.5rem] left-0 bg-white rounded-lg shadow shadow-black flex flex-col z-10 overflow-clip">
            {/* <SearchBoxRecommendationLoader /> */}

            <div className="w-full h-[3rem] px-3 flex justify-between items-center text-gray-700 font-semibold">
                <span className="p-2 rounded-md">Recent</span>
                <button
                    className="py-1 px-2 rounded-md hover:bg-gray-200 text-gray-600"
                    onClick={() => clearSearchHistory()}
                >
                    Clear
                </button>
            </div>
            <RecentlySearchedKeyword name="Performer 1" link="#" />
            <RecentlySearchedKeyword name="Performer 1" link="#" />
            <div className="w-full h-[3rem] px-3 flex justify-between items-center text-gray-700 font-semibold">
                <span className="p-2 rounded-md">Try searching for</span>
            </div>
            <PromotedSearchKeyword
                key={"arijitsingh" + Math.random()}
                name={"Arijit Singh"}
                profileLink={`/profile/${"arijitsingh"}?ref=search-result`}
            />
        </div>
    );
};

const TypeAheadSection = ({ inputValue }) => {
    const { data: recommendationData, isLoading: recommendationDataLoading } =
        useQuery({
            queryKey: ["search-recommendation", inputValue],
            queryFn: async () => {
                const res = await axiosInstance.get(`search/recommend/`, {
                    params: {
                        q: inputValue,
                    },
                });
                return res.data;
            },
            onSuccess: (data) => {
                console.log(data);
            },
        });
    return (
        <div className="h-fit w-full absolute top-[3.5rem] left-0 bg-white rounded-lg shadow shadow-black flex flex-col z-10 overflow-clip">
            {recommendationDataLoading ? (
                <SearchBoxRecommendationLoader />
            ) : (
                recommendationData.slice(0, 5).map((event) => {
                    return (
                        <TypeAheadRecommendatedKeyword
                            name={event.event_name}
                            link="#"
                        />
                    );
                })
            )}
            <div
                className=" w-full h-[3rem] px-5 flex items-center justify-center text-[1rem] text-[#0077b5] font-semibold cursor-pointer hover:bg-gray-200"
                onClick={() => {
                    
                }}
            >
                see all results
            </div>
        </div>
    );
};
const TypeAheadRecommendatedKeyword = ({ name, profileLink }) => {
    return (
        <div className="w-full h-[3rem] px-5 flex items-center gap-[1rem] text-[1rem] text-gray-700 font-semibold cursor-pointer hover:bg-gray-200 truncate">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
            {/* <Link to={profileLink} className="w-full flex"> */}
                <span className="truncate">{name}</span>
            {/* </Link> */}
        </div>
    );
};

const RecentlySearchedKeyword = ({ name, link }) => {
    return (
        <div className="w-full h-[3rem] px-5 flex items-center gap-[1rem] text-[1rem] text-gray-700 font-semibold cursor-pointer hover:bg-gray-200">
            <FontAwesomeIcon icon={faClockRotateLeft} className="" />
            <span className="">{name}</span>
        </div>
    );
};
const PromotedSearchKeyword = ({ name, profileLink }) => {
    return (
        <div className="w-full h-[3rem] px-5 flex items-center gap-[1rem] text-[1rem] text-gray-700 font-semibold cursor-pointer hover:bg-gray-200">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
            <span className="">{name}</span>
        </div>
    );
};

const LocationIcon = ({ searchActive1 }) => {
    return (
        <div
            className={`h-full w-[8rem] md:flex items-center bg-[#EDF3F8] rounded-md px-4 shrink-0 cursor-pointer ${
                false && "outline outline-2"
            }
            ${searchActive1 ? "hidden" : "flex"}`}
        >
            <FontAwesomeIcon
                icon={faLocationDot}
                className="text-black text-lg cursor-pointer"
            />
            <div className="h-full w-full rounded-lg px-2 flex items-center">
                Location
            </div>
            <FontAwesomeIcon
                icon={faCaretDown}
                className="text-black text-lg cursor-pointer"
            />
        </div>
    );
};
const HomeIcon = ({ searchActive1 }) => {
    return (
        <div
            className={`h-full md:flex flex-col items-center justify-center sm:justify-between text-gray-500 text-md hover:text-black cursor-pointer shrink-0 ${
                searchActive1 ? "hidden" : "flex"
            }}`}
        >
            <FontAwesomeIcon icon={faHouse} className="h-[1.5rem] shrink-0" />
            <div className="leading-5 hidden sm:flex">Home</div>
        </div>
    );
};

const SearchIcon = ({ setSearchActive1 }) => {
    return (
        <div
            className="h-full md:hidden flex flex-col items-center justify-center sm:justify-between text-gray-500 text-md hover:text-black cursor-pointer shrink-0"
            onClick={() => setSearchActive1(true)}
        >
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="h-[1.5rem] shrink-0"
            />
            <div className="leading-5 hidden sm:flex">Search</div>
        </div>
    );
};
const NotificationIcon = ({ searchActive1 }) => {
    return (
        <div
            className={`h-full md:flex flex-col items-center justify-center sm:justify-between text-gray-500 text-md hover:text-black cursor-pointer shrink-0 ${
                searchActive1 ? "hidden" : "flex"
            }`}
        >
            <FontAwesomeIcon icon={faBell} className="h-[1.5rem] shrink-0" />
            <div className="leading-5 hidden sm:flex">Notifications</div>
        </div>
    );
};
const MeIcon = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center sm:justify-between text-gray-500 text-md hover:text-black cursor-pointer shrink-0">
            <img
                src={UserImg}
                className="h-[1.5rem] w-[1.5rem] rounded-full shrink-0"
            />
            <div className="leading-5 hidden sm:flex gap-1 items-center">
                Me <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </div>
    );
};
export default NavigationBar;
