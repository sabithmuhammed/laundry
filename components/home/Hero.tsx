import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-[#0B3F70] to-[#6999C6] text-white h-[400px]">
            <div className="container h-[400px] max-w-7xl mx-auto py-0  px-4 mb-0  flex items-center justify-between">
                <div className="">
                    <h1 className="text-3xl ">Best laundry service near you</h1>
                    <h2 className="text-xl text-white/80 my-3">
                        WELCOME TO{" "}
                        <span className="text-blue-400 font-semibold">
                            CleanPro
                        </span>
                    </h2>
                    <p className="text-xl">
                        We collect, clean and deliver to you!
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center ">
                            <div className="h-3 w-1 bg-blue-500 me-1 rounded-full"></div>
                            <p className="font-medium  h-fit">
                                Download our app now
                            </p>
                        </div>
                        <div className="mt-2">
                            <Button
                                color="default"
                                variant="flat"
                                radius={"none"}
                                className="me-4"
                            >
                                App store
                            </Button>
                            <Button
                                color="default"
                                variant="flat"
                                radius={"none"}
                            >
                                Play store
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="max-md:hidden">
                    <Image isBlurred height={"400px"} src={"/hero1.png"} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
