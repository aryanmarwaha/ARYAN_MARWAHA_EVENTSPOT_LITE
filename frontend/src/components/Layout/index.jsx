import NavigationBar from "../NavigationBar";
const Layout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <div className="w-screen h-[calc(100vh-4rem)] flex justify-center bg-[#F4F2EE] overflow-y-auto">
                <div className="w-[calc(100%-2rem)] lg:w-[60rem] xl:w-[80rem] h-fit shrink-0">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
