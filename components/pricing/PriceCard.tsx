import React from "react";
import { FaTshirt, FaWater, FaFire } from "react-icons/fa";
function PriceCard() {
    return (
        <div className="w-[250px] h-auto bg-white p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary-300/50">
            <h2 className="text-primary-400 text-xl font-semibold text-center mb-4">
                RAIN COAT
            </h2>
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <FaWater className="text-primary-300" />
                        <p className="text-primary-300">Dry Clean</p>
                    </div>
                    <p className="text-primary-300 font-semibold">
                        <span className="text-sm font-normal">QR.</span>
                        40
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <FaTshirt className="text-primary-300" />
                        <p className="text-primary-300">Wash & Iron</p>
                    </div>
                    <p className="text-primary-300 font-semibold">
                        <span className="text-sm font-normal">QR.</span>
                        40
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <FaFire className="text-primary-300" />
                        <p className="text-primary-300">Iron Only</p>
                    </div>
                    <p className="text-primary-300 font-semibold">
                        <span className="text-sm font-normal">QR.</span>
                        40
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PriceCard;
