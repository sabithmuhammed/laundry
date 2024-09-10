const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* About Section */}
            <div className="bg-white p-6 rounded-md shadow-md mb-6">
                <h2 className="text-primary-400 text-2xl font-semibold text-center mb-4">
                    About Us
                </h2>
                <p className="text-primary-400 text-lg text-center mb-4">
                    Welcome to our Laundry Service! We provide professional
                    laundry and dry cleaning services, ensuring that your
                    clothes are always clean and well taken care of. Orders can
                    be conveniently placed through our mobile app.
                </p>
                <p className="text-primary-400 text-lg text-center">
                    Whether you need dry cleaning, wash & iron, or ironing
                    services, our team is here to provide top-quality service
                    and fast turnaround times. Download our app to place an
                    order, and we’ll take care of the rest!
                </p>
            </div>

            {/* Contact Section */}
            <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-primary-400 text-2xl font-semibold text-center mb-4">
                    Contact Us
                </h2>
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-primary-400 text-lg">
                        Email: laundry@example.com
                    </p>
                    <p className="text-primary-400 text-lg">
                        Phone: +123 456 7890
                    </p>
                    <p className="text-primary-400 text-lg">
                        Address: 123 Laundry Lane, Clean City, CL 12345
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
