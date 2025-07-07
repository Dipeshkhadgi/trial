
const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">
                    About Dessert Palace
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                    At <span className="font-semibold text-purple-600">Dessert Palace</span>, we believe every occasion deserves a sweet touch. We’re an online bakery delivering freshly baked cakes, pastries, and desserts straight to your doorstep – made with love, creativity, and top-quality ingredients.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-xl border hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-purple-600 mb-2">🎂 Freshly Baked</h3>
                        <p className="text-gray-600 text-sm">
                            Our cakes and desserts are made fresh every day to ensure top-notch taste and quality.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-purple-600 mb-2">🚚 Fast Delivery</h3>
                        <p className="text-gray-600 text-sm">
                            Get your favorite treats delivered within hours anywhere in Kathmandu Valley.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-purple-600 mb-2">❤️ Customer First</h3>
                        <p className="text-gray-600 text-sm">
                            Our priority is making your celebrations special – one cake at a time.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h4 className="text-2xl font-semibold text-purple-700 mb-2">Why Choose Us?</h4>
                    <p className="text-gray-700 max-w-xl mx-auto">
                        From birthdays to weddings, our goal is to make every dessert experience delightful.
                        Easy ordering, customized cakes, and a commitment to quality are what set us apart.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
