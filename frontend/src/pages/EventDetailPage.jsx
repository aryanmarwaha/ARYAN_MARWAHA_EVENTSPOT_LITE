import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";

const EventDetailPage = () => {
    const { id } = useParams();
    const { data: eventDetails, isLoading: eventDetailsLoading } = useQuery({
        queryKey: ["eventDetails"],
        queryFn: async () => {
            const res = await axiosInstance.get(`event/${id}`);
            return res.data;
        },
    });
    return (
        <div className="w-10rem h-full border bg-black">
        </div>
    );
};
export default EventDetailPage;
