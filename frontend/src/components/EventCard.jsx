import { useNavigate } from "react-router-dom";

const EventCard = ({imageURL="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00373696-bljsjunjuk-portrait.jpg", event_name="Event Name", date="Date", venue="Venue", type="Type", price="Price", eventURL}) => {
    const navigate = useNavigate();
    return (
        <div className="md:w-full xl:w-[12rem] h-fit shrink-0 rounded-lg flex flex-col justify-center overflow-clip cursor-pointer" onClick={()=>navigate(eventURL)}>
            <div style={{'--image-url': `url(${imageURL})`}} className={`w-full bg-black flex justify-center bg-[image:var(--image-url)] bg-cover`}>
                <div className="w-full h-full flex justify-center backdrop-blur-sm">
                    <img src={imageURL} className="shadow max-h-[20rem]"/>
                </div>
            </div>
            <div className="w-full pt-2 flex flex-col items-start">
                <h1 className="text-lg font-semibold">{event_name}</h1>
                <h2 className="text-gray-700 font-medium">{date}</h2>
                <h2 className="text-gray-500">{type}</h2>
                <h2 className="text-gray-500">{price} onwards</h2>
            </div>
        </div>
    )
}

export default EventCard;