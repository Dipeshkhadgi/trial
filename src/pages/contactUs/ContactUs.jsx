import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {

    const [contactValue, setContactValue] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const { name, email, mobile, message } = contactValue;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactValue({ ...contactValue, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const payload = {
                ...contactValue,
                mobile: parseInt(contactValue.mobile, 10),
            };

            const response = await axios.post("http://localhost:8000/api/contact/add-create", payload);

            if (response.status === 200 || response.status === 201) {
                toast.success("Message sent successfully!");
                setContactValue({ name: "", email: "", mobile: "", message: "" });
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error(
                error.response?.data?.message || "Failed to send message. Try again!"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen  py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8">

                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold text-purple-700 mb-6">Get in Touch</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">mobile</label>
                            <input
                                type="number"
                                name="mobile"
                                value={mobile}
                                placeholder="Your Mobile"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                onChange={handleChange}

                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={message}
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                onChange={handleChange}

                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                </div>

                {/* Map and Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-purple-700 mb-4">Visit Us</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6270803130853!2d85.3189974742795!3d27.697759226832746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190fd048c791%3A0x299cdbd9f60cd3b7!2sSoftwarica%20College%20of%20IT%20%26%20E-Commerce!5e0!3m2!1sen!2snp!4v1717770823555!5m2!1sen!2snp"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-md"
                        title="Softwarica Map"
                    ></iframe>

                    <div className="text-sm space-y-2">
                        <p>📍 Dillibazar, Kathmandu, Nepal</p>
                        <p>📞 +977-9849516237</p>
                        <p>✉️ contact@dessertpalace.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
