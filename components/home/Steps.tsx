import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineLocalLaundryService } from "react-icons/md";

const Steps = () => {
    const steps = [
        {
            Icon: FaMobileAlt,
            title: "ORDER ONLINE",
            description: "Schedule pickup using CleanPro app",
        },
        {
            Icon: MdOutlineLocalShipping,
            title: "PICK UP",
            description: "We'll pick up your laundry as per your order",
        },
        {
            Icon: MdOutlineLocalLaundryService,
            title: "CLEANING",
            description:
                "We'll expertly laundry/dry clean your order with top-quality service",
        },
        {
            Icon: MdOutlineLocalShipping,
            title: "DROP OFF",
            description: "We'll deriver the cleaned fabrics at your doorstep",
        },
    ];

    return (
        <div className="bg-primary w-full ">
            <div className="container  max-w-7xl mx-auto px-4 py-10 md:py-12 flex flex-col items-center">
                <div className="relative flex  items-center justify-center max-w-[500px] w-full">
                    <div className="flex-grow h-1 w-full bg-white rounded-full absolute"></div>
                    <span className="flex-shrink mx-4 text-xl md:text-2xl text-white bg-primary z-10 px-2">
                        STEP BY STEP PROCESS
                    </span>
                </div>
                <div className="w-full flex flex-wrap justify-center mt-4 md:mt-6 gap-5">
                    {steps.length !== 0 &&
                        steps.map((step) => (
                            <div
                                className="w-[200px] h-[200px] bg-white rounded-lg flex flex-col items-center gap-4 p-4 cursor-pointer hover:shadow-all-xl hover:bg-gray-300 text-primary"
                                key={step.title}
                            >
                                <step.Icon size={40} />
                                <h2 className="font-semibold">{step.title}</h2>
                                <p className="text-sm text-center text-primary/80">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Steps;
