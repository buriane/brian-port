import { MoonLoader } from 'react-spinners';

const LoadingScreen = () => {
    const loaderColor = "#FFFF";

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000] z-50">
            <div className="flex flex-col items-center">
                <MoonLoader color={loaderColor} size={60} />
            </div>
        </div>
    );
};

export default LoadingScreen;