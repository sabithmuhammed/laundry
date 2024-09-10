import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

const DownloadApp = () => {
    return (
        <div className="bg-white w-full ">
            <div className="container  max-w-7xl mx-auto px-4 py-10 md:py-12 flex flex-col items-center">
                <div className="bg-pink-300 w-full rounded-xl gap-2 flex justify-between items-center max-w-[950px] p-4">
                    <div className="flex flex-col items-center flex-grow flex-wrap">
                        <div className="">
                            <h2 className="text-center font-semibold text-2xl">
                                DOWNLOAD
                            </h2>
                            <h2 className="font-semibold text-lg">
                                OUR APP NOW
                            </h2>
                        </div>
                        <div className="mt-2 md:hidden">
                            <Image src="/phone.avif" />
                        </div>
                        <p className="text-center mt-2 text-black/80">
                            Experience convenience at your fingertips with our
                            new app! Download now to easily access our services,
                            manage your orders, and receive updates—all in one
                            place.
                        </p>
                        <div className="flex gap-6 mt-4">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                                width={100}
                                height={100}
                            />
                            <div className=" flex flex-col justify-evenly">
                                <Button
                                    color="primary"
                                    startContent={<FaGooglePlay />}
                                >
                                    Google play
                                </Button>
                                <Button
                                    color="primary"
                                    startContent={<FaAppStoreIos size={20} />}
                                >
                                    Play store
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-md:hidden">
                        <Image src="/phone.avif" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
