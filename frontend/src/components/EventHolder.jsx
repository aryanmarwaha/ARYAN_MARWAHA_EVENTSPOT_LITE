import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { formatDate } from "../lib/formatDate.js";
import EventCardPlaceHolderLoader from "./Loaders/EventCardPlaceHolderLoader.jsx";
import { useSelector } from "react-redux";
import { selectFilter } from "../redux/slices/filterEvent.slice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";


const EventHolder = ({ showFilter, setShowFilter}) => {
    const filter = useSelector(selectFilter);

    const { data: eventList, isLoading: eventListLoading } = useQuery({
        queryKey: ["events", filter],
        queryFn: async () => {
            const res = await axiosInstance.get("event", {
                params: filter,
            });
            return res.data;
        },
    });
    return (
        <div className="w-full h-fit flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-[#333333] pb-4 flex justify-between items-center">
                <span className="w-fit">
                    Events near you
                </span>
                <span className="md:hidden w-[2rem] h-[2rem] bg-[#ed751c] rounded-full flex justify-center items-center cursor-pointer" onClick={() => setShowFilter(!showFilter)}>
                    <FontAwesomeIcon icon={faFilter} className="h-[1.2rem] w-[1.2rem]"/>
                </span>

            </h1>
            <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[2rem] gap-x-4">
                {eventListLoading ? (
                    <>
                        {[...Array(8)].map((x, i) => (
                            <EventCardPlaceHolderLoader key={i}/>
                        ))}
                    </>
                ) : (
                    eventList &&
                    eventList.map((event) => {
                        return (
                            <EventCard
                                key={event._id}
                                // imageURL={event.images[0]}
                                event_name={event.event_name}
                                date={formatDate(event.date)}
                                venue={event.venue}
                                type={event.type}
                                price={
                                    event["ticket_info"]["currency"] +
                                    " " +
                                    event["ticket_info"]["price_range"][0]
                                }
                                eventURL={`/event/${event._id}`}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default EventHolder;
