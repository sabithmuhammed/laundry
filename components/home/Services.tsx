import { Image } from "@nextui-org/image";

const Services = () => {
    const services = [
        {
            image: "/laundry.jpg",
            title: "Laundry",
            description:
                "Keep your clothes looking fresh and clean with our professional laundry service. We handle your garments with care, using high-quality detergents and advanced techniques to ensure they come back spotless and well-folded.",
        },
        {
            image: "/dryCleaning.jpg",
            title: "Dry Cleaning",
            description:
                "For delicate fabrics and special items, our dry cleaning service offers gentle, effective cleaning. We use eco-friendly solvents and specialized equipment to remove stains and maintain the integrity of your garments.",
        },
        {
            image: "/ironingImg.jpg",
            title: "Ironing",
            description:
                "Achieve a crisp, polished look with our expert ironing service. We meticulously press your clothes to perfection, giving you a professional appearance for any occasion.",
        },
        {
            image: "/shoe.jpg",
            title: "Shoe Cleaning",
            description:
                "Refresh your footwear with our thorough shoe cleaning service. We clean all types of shoes, ensuring they look as good as new.",
        },
    ];

    return (
        <div className="bg-white">
            <div className="container  max-w-7xl mx-auto md:px-4 py-10  md:py-12 flex flex-col items-center">
                <div className="relative flex  items-center justify-center max-w-[500px] w-full mx-4">
                    <div className="flex-grow h-1 mx-4 w-full bg-primary-400 rounded-full absolute"></div>
                    <span className="flex-shrink mx-4 text-xl md:text-2xl text-primary-400 bg-white z-10 px-2">
                        OUR SERVICES
                    </span>
                </div>
                <div className="w-full md:mt-6">
                    {services.length !== 0 &&
                        services.map((service, index) => (
                            <div
                                className="w-full flex flex-col max-md:items-center mb-8 md:flex-row gap-5"
                                key={service.title}
                            >
                                <div
                                    className={`max-md:hidden w-1/3 ${index % 2 === 0 ? `order-0` : `order-1`}`}
                                >
                                    <Image src={service.image} />
                                </div>
                                <div className=" w-full md:w-2/3 md:flex md:justify-center md:flex-col">
                                    <h3 className="mt-4 mb-4 text-2xl md:text-3xl max-md:text-center">
                                        {service.title}
                                    </h3>
                                    <Image
                                        src={service.image}
                                        width={"full"}
                                        className="md:hidden w-full max-md:rounded-none"
                                        
                                    />
                                    <p className="text-center max-md:px-4 mt-4 text-black/80">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
