const EventCardPlaceHolderLoader = () => {
    return (
        <div className="md:w-full xl:w-[12rem] h-fit shrink-0 rounded-lg flex flex-col justify-center overflow-clip">
            <div className={`w-full bg-gray-300 flex justify-center animate-pulse`}>
                <div className="w-full h-full flex justify-center backdrop-blur-sm">
                    <div className="w-[20rem] h-[16rem] max-h-[20rem] bg-gray-300 animate-pulse" />
                </div>
            </div>
            <div className="w-full pt-2 flex flex-col items-start gap-2">
                <h1 className="w-full h-[1rem] rounded-lg bg-gray-300 animate-pulse"></h1>
                <h2 className="w-full h-[1rem] rounded-lg bg-gray-300 animate-pulse"></h2>
                <h2 className="w-full h-[1rem] rounded-lg bg-gray-300 animate-pulse"></h2>
            </div>
        </div>
    );
};
export default EventCardPlaceHolderLoader;