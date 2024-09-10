import { FaTruck } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

const Delivery = () => {
    return (
        <div className="w-full">
            <div className="container  max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-6 flex flex-wrap max-md:justify-start  items-center justify-center gap-3 md:gap-6 ">
                <div className="flex">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-primary-300 text-white rounded-lg flex items-center justify-center flex-wrap">
                        <FaTruck className="text-xl md:text-3xl" />
                    </div>
                    <div className="ms-2 flex flex-col justify-center ">
                        <h2 className="max-md:text-xs font-medium">Free delivery</h2>
                        <p className="text-xs md:text-sm text-black/70 md:w-[150px] text-balance">
                            Reliable delivery at no extra cost.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-primary-300 text-white rounded-lg flex items-center justify-center">
                        <FaTruckFast className="text-xl md:text-3xl" />
                    </div>
                    <div className="ms-2 flex flex-col justify-center">
                        <h2 className="max-md:text-xs font-medium">Express delivery</h2>
                        <p className="text-xs md:text-sm text-black/70 md:w-[150px] text-balance">
                            Swift delivery to your door for an extra fee.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
