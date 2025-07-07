
const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">
                    Privacy Policy
                </h1>

                <p className="text-gray-700 mb-4">
                    At <span className="font-semibold text-purple-600">Dessert Palace</span>, your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
                </p>

                <h2 className="text-xl font-semibold text-purple-600 mt-6 mb-2">1. Information We Collect</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Personal Information: Name, email, phone number, address</li>
                    <li>Order Details: Products ordered, delivery preferences</li>
                    <li>Payment Information: Processed securely via third-party providers</li>
                    <li>Usage Data: Website browsing behavior and preferences</li>
                </ul>

                <h2 className="text-xl font-semibold text-purple-600 mt-6 mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>To process and deliver your orders efficiently</li>
                    <li>To communicate about order status, offers, and updates</li>
                    <li>To improve user experience and personalize our services</li>
                    <li>To comply with legal obligations</li>
                </ul>

                <h2 className="text-xl font-semibold text-purple-600 mt-6 mb-2">3. Data Security</h2>
                <p className="text-gray-700 mb-4">
                    We implement strict security measures to safeguard your personal data. All payment transactions are encrypted and handled by trusted gateways.
                </p>

                <h2 className="text-xl font-semibold text-purple-600 mt-6 mb-2">4. Third-Party Sharing</h2>
                <p className="text-gray-700 mb-4">
                    We do not sell or share your personal information with third parties except for delivery partners and payment gateways involved in fulfilling your order.
                </p>

                <h2 className="text-xl font-semibold text-purple-600 mt-6 mb-2">5. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                    You can request to view, update, or delete your personal data at any time by contacting us at <span className="text-purple-600 font-medium">privacy@dessertpalace.com</span>.
                </p>

                <h2 className="text-xl font-semibold text-purple-600 mt-6 mb-2">6. Changes to Policy</h2>
                <p className="text-gray-700 mb-4">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date.
                </p>

                <p className="text-sm text-gray-500 mt-6 text-center">
                    Last updated: June 7, 2025
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
