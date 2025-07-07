
const DeliveryPage = () => {
    return (
        <div className="min-h-screen bg-pink-50 px-6 py-12">
            <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h1 className="text-3xl md:text-4xl font-bold text-purple-600 text-center mb-8">
                    Delivery Information
                </h1>

                <p className="text-gray-700 text-lg mb-6 text-center">
                    At <span className="font-semibold text-pink-500">Dessert Palace</span>, we deliver sweetness to your doorstep—fresh, fast, and right on time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
                    <div>
                        <h2 className="text-xl font-semibold text-pink-500 mb-2">📍 Delivery Areas</h2>
                        <p>
                            We currently offer delivery within Kathmandu Valley. For nearby areas outside the valley, custom delivery can be arranged with extra charges.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-pink-500 mb-2">🚚 Delivery Timing</h2>
                        <p>
                            Orders placed before 4 PM are eligible for same-day delivery. You can also schedule your order for a specific date and time for events or surprises.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-pink-500 mb-2">🎂 Freshness Guaranteed</h2>
                        <p>
                            All cakes are made to order and packed carefully to ensure they reach you in perfect condition. We bake daily and do not use pre-frozen stock.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-pink-500 mb-2">💵 Delivery Charges</h2>
                        <p>
                            Free delivery on orders above NPR 1000. For orders below this amount, a minimal delivery fee based on location will apply.
                        </p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Have special delivery instructions?
                    </h3>
                    <p className="text-gray-600">Contact our delivery team at <span className="text-purple-600 font-semibold">+977-9849516237</span> or email us at <span className="text-purple-600 font-semibold">support@dessertpalace.com</span></p>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPage;
