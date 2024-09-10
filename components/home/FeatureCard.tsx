import { Image } from "@nextui-org/image";

type PropType = {
    image: string;
    title: string;
    description: string;
};

const FeatureCard = ({ image, title, description }: PropType) => {
    return (
        <div className="bg-white p-6 h-[350px] w-[250px] flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="h-[120px] w-full flex justify-center items-center mb-4">
                <Image isBlurred src={image} height={"100px"} width={"100px"} className="object-contain" />
            </div>
            <h3 className="font-semibold text-center text-lg text-primary-500 mb-2">
                {title}
            </h3>
            <p className="text-center text-primary-300 text-sm text-black/70 line-clamp-3">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
