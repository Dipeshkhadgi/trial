import { FaBirthdayCake, FaPhoneAlt, FaSmileBeam, FaTruck } from 'react-icons/fa';

const services = [
    {
        icon: <FaBirthdayCake className="text-pink-500 text-4xl mb-4" />,
        title: "Custom Cake Orders",
        desc: "Order personalized cakes for birthdays, weddings, anniversaries, and more.",
    },
    {
        icon: <FaTruck className="text-pink-500 text-4xl mb-4" />,
        title: "Same-Day Delivery",
        desc: "Enjoy fast and reliable cake delivery across Nepal on the same day.",
    },
    {
        icon: <FaSmileBeam className="text-pink-500 text-4xl mb-4" />,
        title: "Premium Quality",
        desc: "We use only the finest ingredients to ensure every bite is delightful.",
    },
    {
        icon: <FaPhoneAlt className="text-pink-500 text-4xl mb-4" />,
        title: "24/7 Support",
        desc: "Our team is available around the clock to assist you with your orders.",
    },
];

const OurServices = () => {
    return (
        <div className="bg-white py-16 px-4 md:px-12 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center"
                    >
                        {service.icon}
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
