import { Image } from "@nextui-org/image";
import FeatureCard from "./FeatureCard";

const features = [
    {
        image: "/machine.jpg",
        title: "Advanced Fabric Care Technology",
        description:
            "We use cutting-edge technology to wash and process your clothes  with the highest standards of care and efficiency.",
    },
    {
        image: "/tshirt.jpg",
        title: "Premium Care",
        description:
            "Our commitment to quality ensures your garments receive exceptional care and service every time.",
    },
    {
        image: "/ironing.jpg",
        title: "Professional Ironing",
        description:
            "Get your clothes looking crisp and fresh with our expert ironing services, ensuring a perfect finish for every garment.",
    },
];

const Features: React.FC = () => {
    return (
        <div className=" w-full bg-pink-200 py-20">
            <div className="container  max-w-7xl mx-auto px-6  flex flex-col items-center bg-pink-200">
                <div className="relative flex  items-center justify-center max-w-[500px] w-full">
                    <div className="flex-grow h-1 w-full bg-primary-400 rounded-full absolute"></div>
                    <span className="flex-shrink mx-4 text-xl md:text-2xl text-primary-400 bg-pink-200 z-10 px-2">
                        OUR FEATURES
                    </span>
                </div>

                <h2 className="mb-8 mt-4 text-2xl md:text-3xl text-center">
                    Why Choose Our Service
                </h2>

                <div className="flex gap-5 flex-wrap  justify-center">
                    {features.length !== 0 &&
                        features.map((feature) => (
                            <FeatureCard key={feature.title} {...feature} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
