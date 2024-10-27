import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { formatDate } from "../lib/formatDate.js";
const EventHolder = () => {
    const { data: eventList, isLoading: eventListLoading } = useQuery({
        queryKey: ["events"],
        queryFn: async () => {
            const res = await axiosInstance.get("event");
            return res.data;
        },
    });
    return (
        <div className="w-full h-fit flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-[#333333] pb-4">
                Events near you
            </h1>
            <div className="w-full flex flex-wrap gap-4">
                {eventListLoading
                    ? ""
                    : eventList &&
                      eventList.map((event) => (
                          <EventCard
                              key={event.id}
                              imageURL={event.imageURL}
                              event_name={event.event_name}
                              date={formatDate(event.date)}
                              venue={event.venue}
                              type={event.type}
                              price={event["ticket_info"]["price_range"][0]}
                          />
                      ))}
            </div>
        </div>
    );
};

export default EventHolder;
